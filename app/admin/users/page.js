'use client';
import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import AdminLayout from '@/components/admin/AdminLayout';
import { fetcher } from '@/lib/fetcher';


const page = () => {
    // Sample users data
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const data = await fetcher('/auth/all-users')
            setUsers(data.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }

    console.log(users)

    // Function to toggle the block/unblock status of a user
    const toggleBlockStatus = async (id, currentStatus) => {
        try {
            const response = await fetcher(`/auth/block-user/${id}`, {
                method: 'PUT'
            })

            setUsers((prevUsers) =>
                prevUsers.map((user) =>
                    user._id === id ? { ...user, isBlocked: !currentStatus } : user
                )
            );

        } catch (error) {
            console.error('Error toggling block status:', error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <AdminLayout>
            <div className="p-4">
                <h2 className="text-2xl font-semibold mb-6">Users Management</h2>

                {/* Table listing the users */}
                <div className="overflow-x-auto">
                    <Table className="w-full table-auto border">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="px-4 py-2">Username</TableHead>
                                <TableHead className="px-4 py-2">Email</TableHead>
                                <TableHead className="px-4 py-2">Status</TableHead>
                                <TableHead className="px-4 py-2">Actions</TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {users.map((user) => (
                                <TableRow key={user.id} className="border-t">
                                    <TableCell className="px-4 py-2">{user?.username}</TableCell>
                                    <TableCell className="px-4 py-2">{user?.email}</TableCell>
                                    <TableCell className="px-4 py-2 capitalize">{user.isBlocked ? 'Blocked' : 'Unblocked'}</TableCell>
                                    <TableCell className="px-4 py-2">
                                        <Button
                                            variant="outline"
                                            onClick={() => toggleBlockStatus(user._id, user.isBlocked)}
                                            className={`px-4 py-1 rounded ${user.isBlocked ? ' text-red-500' : ' text-blue-500'}`}
                                        >
                                            {user.isBlocked ? 'Unblock' : 'Block'}
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </AdminLayout>
    );
};

export default page;

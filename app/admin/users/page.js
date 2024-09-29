'use client';

import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import AdminLayout from '@/components/admin/AdminLayout';

const page = () => {
    // Sample users data
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com', status: 'unblocked' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'blocked' },
        { id: 3, name: 'Mike Ross', email: 'mike@example.com', status: 'unblocked' },
    ]);

    // Function to toggle the block/unblock status of a user
    const toggleBlockStatus = (id) => {
        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user.id === id
                    ? { ...user, status: user.status === 'blocked' ? 'unblocked' : 'blocked' }
                    : user
            )
        );
    };

    return (
        <AdminLayout>
            <div className="p-4">
                <h2 className="text-2xl font-semibold mb-6">Users Management</h2>

                {/* Table listing the users */}
                <div className="overflow-x-auto">
                    <Table className="w-full table-auto border">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="px-4 py-2">Name</TableHead>
                                <TableHead className="px-4 py-2">Email</TableHead>
                                <TableHead className="px-4 py-2">Status</TableHead>
                                <TableHead className="px-4 py-2">Actions</TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {users.map((user) => (
                                <TableRow key={user.id} className="border-t">
                                    <TableCell className="px-4 py-2">{user.name}</TableCell>
                                    <TableCell className="px-4 py-2">{user.email}</TableCell>
                                    <TableCell className="px-4 py-2 capitalize">{user.status}</TableCell>
                                    <TableCell className="px-4 py-2">
                                        <Button
                                        variant="outline"
                                            onClick={() => toggleBlockStatus(user.id)}
                                            className={`px-4 py-1 rounded ${user.status === 'blocked' ? ' text-red-500' : ' text-blue-500'}`}
                                        >
                                            {user.status === 'blocked' ? 'Unblock' : 'Block'}
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

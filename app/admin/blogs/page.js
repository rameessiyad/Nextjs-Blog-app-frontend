'use client';

import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Edit, Trash } from 'lucide-react';
import AdminLayout from '@/components/admin/AdminLayout';
import { fetcher } from '@/lib/fetcher';
import { BASEURL } from '@/lib/baseUrl';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const page = () => {
    // Sample blog data
    const [blogs, setBlogs] = useState([]);

    const router = useRouter();

    const fetchBlogs = async () => {
        try {
            const data = await fetcher('/blog/blogs')
            setBlogs(data.data);
        } catch (error) {
            console.log("Error fetching blogs", error);
        }
    }

    useEffect(() => {
        fetchBlogs();
    }, [])

    //delete blog function
    const handleDelete = async (id) => {
        try {
            const response = await fetch(`${BASEURL}/blog/delete/${id}`, {
                method: 'DELETE',
                credentials: 'include'
            });

            const result = await response.json();

            if (response.ok) {
                setBlogs(blogs.filter((blog) => blog._id !== id));
                toast.success("Blog deleted");
            } else {
                toast.error(result.message || "Failed to delete blog");
            }

        } catch (error) {
            console.log("Error deleting blog", error);
        }
    }

    return (
        <AdminLayout>
            <div className="p-4">
                <h2 className="text-2xl font-semibold mb-6">Blogs Management</h2>

                {/* Blog listing table */}
                <div className="overflow-x-auto">
                    <Table className="w-full table-auto border">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="px-4 py-2">Image</TableHead>
                                <TableHead className="px-4 py-2">Title</TableHead>
                                <TableHead className="px-4 py-2">Actions</TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {blogs.map((blog) => (
                                <TableRow key={blog._id} className="border-t">
                                    {/* Blog Image */}
                                    <TableCell className="px-4 py-2">
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="w-16 h-16 object-cover rounded-md"
                                        />
                                    </TableCell>
                                    {/* Blog Title */}
                                    <TableCell className="px-4 py-2">{blog.title}</TableCell>
                                    {/* Actions for Edit and Delete */}
                                    <TableCell className="px-4 py-2">
                                        <div className="flex gap-2">
                                            {/* Edit Button */}
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => router.push(`/admin/blogs/editblog/${blog._id}`)}
                                                className="flex items-center gap-2"
                                            >
                                                <Edit className="w-4 h-4" />
                                                Edit
                                            </Button>
                                            {/* Delete Button */}
                                            <Button
                                                variant="destructive"
                                                size="sm"
                                                onClick={() => handleDelete(blog._id)}
                                                className="flex items-center gap-2"
                                            >
                                                <Trash className="w-4 h-4" />
                                                Delete
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </AdminLayout >
    );
};

export default page;

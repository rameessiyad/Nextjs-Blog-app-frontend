'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import AdminLayout from '@/components/admin/AdminLayout';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const AddBlogPage = () => {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
    });

    const [image, setImage] = useState(null);

    const router = useRouter();

    const mutation = useMutation({
        mutationFn: async (data) => {
            const response = await fetch('http://localhost:5000/api/v1/blog/create', {
                method: 'POST',
                body: data,
                credentials: 'include', 
            });

            const result = await response.json();

            
            if (!response.ok) {
                throw new Error(result.message || 'Failed to create blog');
            }

            return result;
        },
        onSuccess: (response) => {
            if (!response.success) {
                toast.error(response.message);
            } else {
                toast.success("Blog added");
                router.push('/admin/blogs');
            }
        },
        onError: (error) => {
            console.error(error);
            toast.error("Something went wrong. Please try again.");
        }
    });

    // Handle image change
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('title', formData.title);
        data.append('content', formData.content);
        if (image) {
            data.append('image', image);
        }
        mutation.mutate(data);
    };

    return (
        <AdminLayout>
            <div className="p-4">
                <h2 className="text-2xl font-semibold mb-6">Add New Blog</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Title Input */}
                    <div>
                        <Label htmlFor="title">Title</Label>
                        <Input
                            id="title"
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            className="mt-1"
                        />
                    </div>

                    {/* Content Input */}
                    <div>
                        <Label htmlFor="content">Content</Label>
                        <Textarea
                            id="content"
                            name="content"
                            value={formData.content}
                            onChange={handleChange}
                            required
                            className="mt-1"
                            rows={5}
                        />
                    </div>

                    {/* Image Upload */}
                    <div>
                        <Label htmlFor="image">Upload Image</Label>
                        <Input
                            id="image"
                            type="file"
                            accept="image/*"
                            name="image"
                            onChange={handleImageChange} // Handle image upload separately
                            className="mt-1"
                        />
                        {image && (
                            <div className="mt-2">
                                <img
                                    src={URL.createObjectURL(image)} // Preview the image before upload
                                    alt="Preview"
                                    className="w-32 h-32 object-cover rounded-md"
                                />
                            </div>
                        )}
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" className="mt-4">
                        Add Blog
                    </Button>
                </form>
            </div>
        </AdminLayout>
    );
};

export default AddBlogPage;

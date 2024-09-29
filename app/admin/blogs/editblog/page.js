'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import AdminLayout from '@/components/admin/AdminLayout';

const page = () => {
    // Sample blog data
    const [title, setTitle] = useState('Sample Blog Title');
    const [description, setDescription] = useState('Sample description for the blog.');
    const [content, setContent] = useState('This is the main content of the blog.');
    const [views, setViews] = useState(100);
    const [image, setImage] = useState('path/to/image.jpg'); // Replace with actual image path or URL

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file)); // Preview the image
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., update the blog post)
        console.log({
            title,
            description,
            content,
            views,
            image,
        });
        // Reset the form or navigate back
    };

    return (
        <AdminLayout>
        <div className="p-4">
            <h2 className="text-2xl font-semibold mb-6">Edit Blog</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Title Input */}
                <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="mt-1"
                    />
                </div>

                {/* Description Input */}
                <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="mt-1"
                        rows={3}
                    />
                </div>

                {/* Content Input */}
                <div>
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
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
                        onChange={handleImageChange}
                        className="mt-1"
                    />
                    {image && (
                        <div className="mt-2">
                            <img
                                src={image}
                                alt="Preview"
                                className="w-32 h-32 object-cover rounded-md"
                            />
                        </div>
                    )}
                </div>

                {/* Submit Button */}
                <Button type="submit" className="mt-4">
                    Update Blog
                </Button>
            </form>
        </div>
        </AdminLayout>
    );
};

export default page;

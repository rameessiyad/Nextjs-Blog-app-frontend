'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import AdminLayout from '@/components/admin/AdminLayout';
import { useParams, useRouter } from 'next/navigation';
import { fetcher } from '@/lib/fetcher';
import { BASEURL } from '@/lib/baseUrl';
import { toast } from 'react-toastify';

const page = () => {

    const { id } = useParams();
    const router = useRouter();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');


    const fetchBlogData = async (id) => {
        try {
            const data = await fetcher(`/blog/${id}`);
            setTitle(data.data.title);
            setContent(data.data.content);
            setImage(data.data.image);


        } catch (error) {
            console.log("Error fetching blog data", error);
        }
    }

    useEffect(() => {
        if (id) {
            fetchBlogData(id);
        }
    }, [])

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file)); // Preview the image
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('content', content);
            if (image) {
                const imageFile = image.startsWith('blob') ? image : null;
                if (imageFile) {
                    formData.append('image', imageFile);
                }
            }

            const response = await fetch(`${BASEURL}/blog/edit/${id}`, {
                method: 'PUT',
                body: formData,
                credentials: 'include', // Include cookies if required
            });

            if (response.ok) {
                // Navigate back or show success message
                toast.success('Blog updated');
                router.push('/admin/blogs'); // Redirect to blogs management page
            } else {
                const result = await response.json();
                console.error(result.message || 'Failed to update blog');
                toast.error(result.message || 'Failed to update blog');
            }
        } catch (error) {
            console.log("Error handling image change", error);
        }
    }

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

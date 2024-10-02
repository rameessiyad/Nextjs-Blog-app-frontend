'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import AuthLayout from '@/components/user/AuthLayout';
import { fetcher } from '@/lib/fetcher';

const Page = () => {
    const { id } = useParams();
       const [blog, setBlog] = useState(null); 
    // Fetch blog details by ID
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await fetcher(`/blog/${id}`); // Call getBlogById API
                setBlog(response.data); // Assuming the response structure is { data: { ...blogData } }
            } catch (error) {
                console.log("Error fetching blog", error);
            }
        };

        fetchBlog();
    }, [id]);

     
    return (
        <AuthLayout>
            <div className="min-h-screen flex flex-col items-center py-10 px-4">
                <section className="container mx-auto">
                    {blog ? ( // Render blog details if available
                        <Card className="max-w-3xl mx-auto shadow-md rounded-lg p-6">
                            <CardHeader>
                                <CardTitle className="text-4xl font-bold mb-6">{blog.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg mb-4 leading-relaxed">{blog.description}</p>
                                <div className="prose max-w-none text-justify">{blog.content}</div>
                            </CardContent>
                        </Card>
                    ) : (
                        <p className="text-center">Loading blog...</p> // Loading state
                    )}

                   
                </section>
            </div>
        </AuthLayout>
    );
};

export default Page;

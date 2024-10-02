'use client';
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AuthLayout from '@/components/user/AuthLayout';
import { fetcher } from '@/lib/fetcher';
import Link from 'next/link';

const Page = () => {
    const [allBlogs, setAllBlogs] = useState([]);
    const [visibleBlogs, setVisibleBlogs] = useState(6);

    const loadMore = () => {
        setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 6);
    };

    const fetchBlogs = async () => {
        try {
            const data = await fetcher('/blog/blogs');
            setAllBlogs(data.data);
        } catch (error) {
            console.log("Error fetching blogs", error);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <AuthLayout>
            <div className="min-h-screen py-10 px-4">
                <section className="container mx-auto max-w-7xl">
                    <h2 className="text-3xl font-bold mb-6 text-center">Blogs</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2 md:px-4">
                        {allBlogs.slice(0, visibleBlogs).map((blog, index) => (
                            <Link href={`/blogs/blog/${blog._id}`} key={index}>
                                <Card key={index} className="shadow-md rounded-lg overflow-hidden transition-transform duration-200 cursor-pointer transform hover:scale-105">
                                    <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover" />
                                    <CardHeader>
                                        <CardTitle className="text-lg font-semibold">{blog.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="mb-2">{blog.content}</p>
                                        <span className="text-sm text-gray-500">{formatDate(blog.createdAt)}</span>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>

                    {visibleBlogs < allBlogs.length && (
                        <div className="mt-8 flex justify-center">
                            <Button onClick={loadMore} variant="default">
                                Load More
                            </Button>
                        </div>
                    )}
                </section>
            </div>
        </AuthLayout>
    );
};

export default Page;

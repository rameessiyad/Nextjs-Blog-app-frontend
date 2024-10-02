// pages/top-blogs.js
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { fetcher } from '@/lib/fetcher';

const TopBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    const displayedBlogs = blogs.slice(0, 3);

    const fetchBlogs = async () => {
        try {
            const data = await fetcher('/blog/topblogs')
            setBlogs(data.data);
        } catch (error) {
            console.log("Error fetching blogs", error);
        }
    }

    useEffect(() => {
        fetchBlogs();
    }, [])

    return (
        <div className="min-h-screen flex flex-col items-center py-10 px-4">
            <section className="container mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center">Top Blogs</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {displayedBlogs.map((blog, index) => (
                        <Card key={index} className="w-full max-w-xs shadow-md rounded-lg overflow-hidden transition-transform duration-200 transform hover:scale-105">
                            <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover" />
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold">{blog.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <span className="text-sm text-gray-500">{blog.content}</span>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline">Read More</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <Link href={'/blogs'}>
                    <Button className="mt-4 block mx-auto my-8">See All Blogs</Button>
                </Link>
            </section>
        </div>
    );
};

export default TopBlogs;

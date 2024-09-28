// pages/top-blogs.js
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const TopBlogs = () => {
    const blogs = [
        {
            title: 'Understanding Next.js',
            excerpt: 'A deep dive into the Next.js framework and its features. Learn how to build SEO-friendly applications with ease.',
            date: 'September 20, 2024',
            image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxvZyUyMGNvbXB1dGVyfGVufDB8fDB8fHww',
        },
        {
            title: 'ShadCN UI Basics',
            excerpt: 'An introduction to using ShadCN UI in your projects. Discover the components and utilities that can speed up your development.',
            date: 'September 18, 2024',
            image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxvZyUyMGNvbXB1dGVyfGVufDB8fDB8fHww',
        },
        {
            title: 'Building Responsive UIs',
            excerpt: 'Techniques for creating responsive user interfaces with Tailwind CSS. Tips for maintaining consistency across devices.',
            date: 'September 15, 2024',
            image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxvZyUyMGNvbXB1dGVyfGVufDB8fDB8fHww',
        },
        // Additional blog entries can be added here
    ];

    // Slice the array to show only the first three blogs
    const displayedBlogs = blogs.slice(0, 3);

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
                                <p className="mb-2">{blog.excerpt}</p>
                                <span className="text-sm text-gray-500">{blog.date}</span>
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

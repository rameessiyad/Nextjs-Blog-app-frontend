'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const page = () => {
    const allBlogs = [
        {
            title: 'Understanding Next.js',
            excerpt: 'A deep dive into the Next.js framework and its features. Learn how to build SEO-friendly applications with ease.',
            date: 'September 20, 2024',
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&w=500&auto=format&fit=crop&q=60',
        },
        {
            title: 'ShadCN UI Basics',
            excerpt: 'An introduction to using ShadCN UI in your projects. Discover the components and utilities that can speed up your development.',
            date: 'September 18, 2024',
            image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&w=500&auto=format&fit=crop&q=60',
        },
        {
            title: 'Building Responsive UIs',
            excerpt: 'Techniques for creating responsive user interfaces with Tailwind CSS. Tips for maintaining consistency across devices.',
            date: 'September 15, 2024',
            image: 'https://images.unsplash.com/photo-1562564055-071ebcad7e4b?ixlib=rb-4.0.3&w=500&auto=format&fit=crop&q=60',
        },
        {
            title: 'Getting Started with React',
            excerpt: 'A beginner’s guide to starting with React. Understand the basics of components, props, and state management.',
            date: 'September 12, 2024',
            image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&w=500&auto=format&fit=crop&q=60',
        },
        {
            title: 'JavaScript ES6 Features',
            excerpt: 'Exploring the latest features of JavaScript ES6. Learn about arrow functions, destructuring, and promises.',
            date: 'September 10, 2024',
            image: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?ixlib=rb-4.0.3&w=500&auto=format&fit=crop&q=60',
        },
        {
            title: 'Optimizing Performance in React',
            excerpt: 'Best practices for optimizing performance in React applications. Techniques for reducing re-renders and improving speed.',
            date: 'September 5, 2024',
            image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&auto=format&fit=crop&q=60',
        },
        {
            title: 'Exploring Serverless Architecture',
            excerpt: 'A comprehensive guide to serverless architecture and how it can improve scalability for your applications.',
            date: 'September 2, 2024',
            image: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-4.0.3&w=500&auto=format&fit=crop&q=60',
        },
        {
            title: 'React Hooks in Depth',
            excerpt: 'Learn the most important hooks in React and how to use them effectively in your applications.',
            date: 'August 30, 2024',
            image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-4.0.3&w=500&auto=format&fit=crop&q=60',
        },
        {
            title: 'State Management with Redux',
            excerpt: 'Understanding how Redux simplifies state management and how you can integrate it with React.',
            date: 'August 28, 2024',
            image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&w=500&auto=format&fit=crop&q=60',
        },
    ];

    const [visibleBlogs, setVisibleBlogs] = useState(6);

    const loadMore = () => {
        setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 6);
    };

    return (
        <div className="min-h-screen py-10 px-4">
            <section className="container mx-auto max-w-7xl">
                <h2 className="text-3xl font-bold mb-6 text-center">Blogs</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2 md:px-4">
                    {allBlogs.slice(0, visibleBlogs).map((blog, index) => (
                        <Card key={index} className="shadow-md rounded-lg overflow-hidden transition-transform duration-200 cursor-pointer transform hover:scale-105">
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

                {visibleBlogs < allBlogs.length && (
                    <div className="mt-8 flex justify-center">
                        <Button onClick={loadMore} variant="default">
                            Load More
                        </Button>
                    </div>
                )}
            </section>
        </div>
    );
};

export default page;

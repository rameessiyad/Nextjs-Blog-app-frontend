'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import AuthLayout from '@/components/user/AuthLayout';

const page = () => {
    const { id } = useParams(); // Get the blog ID from the URL
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [userName, setUserName] = useState('');

    const blog = {
        title: 'Understanding Next.js',
        description: 'Next.js is a React framework that enables several extra features, including server-side rendering and generating static websites...',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet facilisis tortor...',
        views: 150,
    };

    // Initialize comments or any state that should be client-side only
    useEffect(() => {
        setComments([
            { id: 1, user: 'Alice', text: 'Great article!', timestamp: new Date().toLocaleString() },
            { id: 2, user: 'Bob', text: 'Thanks for sharing!', timestamp: new Date().toLocaleString() },
        ]);
    }, []);

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleUserChange = (e) => {
        setUserName(e.target.value);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim() && userName.trim()) {
            const newCommentObj = {
                id: comments.length + 1,
                user: userName,
                text: newComment,
                timestamp: new Date().toLocaleString(),
            };
            setComments([...comments, newCommentObj]);
            setNewComment('');
            setUserName('');
        }
    };

    return (
        <AuthLayout>
            <div className="min-h-screen flex flex-col items-center py-10 px-4">
                <section className="container mx-auto">
                    <Card className="max-w-3xl mx-auto shadow-md rounded-lg p-6">
                        <CardHeader>
                            <CardTitle className="text-4xl font-bold mb-6">{blog.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg mb-4 leading-relaxed">{blog.description}</p>
                            <div className="prose max-w-none text-justify">{blog.content}</div>
                            <p className="mt-4 text-sm text-gray-500">Views: {blog.views}</p>
                        </CardContent>
                    </Card>

                    {/* Comment Section */}
                    <section className="mt-10">
                        <h3 className="text-2xl font-semibold mb-4 text-center">Comments</h3>
                        <form onSubmit={handleCommentSubmit} className="mb-4 flex flex-col items-center">
                            <div className="flex flex-col items-center gap-2 w-full">
                                <Input
                                    type="text"
                                    className="border rounded-md p-2 w-1/2"
                                    placeholder="Your name"
                                    value={userName}
                                    onChange={handleUserChange}
                                    required
                                />
                                <Textarea
                                    className="border rounded-md p-2 w-1/2"
                                    rows="4"
                                    value={newComment}
                                    onChange={handleCommentChange}
                                    placeholder="Leave a comment..."
                                    required
                                />
                            </div>
                            <Button
                                type="submit"
                                className="mt-10 my-6  px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mx-auto"
                            >
                                Add Comment
                            </Button>
                        </form>
                    </section>

                    {/* Display Comments */}
                    <section className="container mx-auto">
                        <ul className="list-inside flex flex-col items-center">
                            {comments.map((comment) => (
                                <li key={comment.id} className="mb-4 w-1/2">
                                    <div className="flex flex-col items-center border rounded-md p-2">
                                        <div className="flex justify-between w-full">
                                            <span className="font-semibold">{comment.user}</span>
                                            <span className="text-sm text-gray-500">
                                                {comment.timestamp}
                                            </span>
                                        </div>
                                        <p className="text-center">{comment.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>
                </section>
            </div>
        </AuthLayout>
    );
};

export default page;

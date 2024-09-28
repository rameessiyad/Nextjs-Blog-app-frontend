import { Button } from '@/components/ui/button';
import React from 'react';

const page = () => {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen px-4 py-10">
            <div className="container mx-auto max-w-4xl text-center">
                <h1 className="text-4xl font-bold">Contact Us</h1>
                <p className="mt-4 text-lg">
                    We’d love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out.
                </p>

                <div className="mt-10">
                    <h2 className="text-3xl font-semibold">Get in Touch</h2>
                    <form className="mt-6 space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-left text-sm font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Your Name"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-left text-sm font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Your Email"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-left text-sm font-medium">
                                Message
                            </label>
                            <textarea
                                id="message"
                                placeholder="Your Message"
                                rows="4"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
                                required
                            />
                        </div>
                        <Button className="w-full">Submit</Button>
                    </form>
                </div>

                <div className="mt-10">
                    <h2 className="text-3xl font-semibold">Follow Us</h2>
                    <p className="mt-4">You can also connect with us on social media:</p>
                    <div className="flex justify-center space-x-4 mt-4">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 19c-4 0-6-4-6-4s3-5 8-5 6 4 6 4-3 5-8 5zm10-5a10 10 0 11-20 0 10 10 0 0120 0z" />
                            </svg>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12h-3v-3h3v-3c0-3 2-5 5-5h3v5h-3c-1 0-2 1-2 2v3h5l-1 3h-4v7h-3v-7z" />
                            </svg>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 3h-8a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3V6a3 3 0 00-3-3zM12 15a3 3 0 100-6 3 3 0 000 6zm6-9h1.5v3H18V6zm-9 2a9 9 0 1118 0A9 9 0 0115 9z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default page;

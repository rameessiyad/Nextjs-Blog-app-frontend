import { Button } from '@/components/ui/button';
import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

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
                            <Input
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
                            <Input
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
                            <Textarea
                                id="message"
                                placeholder="Your Message"
                                rows="4"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
                                required
                            />
                        </div>
                        <div className="w-full mt-8">
                            <a href="mailto:rameessiyad26@gmail.com">
                                <Button className="w-full">Submit</Button>
                            </a>
                        </div>
                    </form>
                </div>

                <div className="mt-10">
                    <h2 className="text-3xl font-semibold">Follow Us</h2>
                    <p className="mt-4">You can also connect with us on social media:</p>
                    <div className="flex justify-center items-center space-x-4 mt-4">
                        <div><FaFacebook /></div>
                        <div><FaInstagram /></div>
                        <div><FaTwitter /></div>
                        <div><FaGithub /></div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default page;

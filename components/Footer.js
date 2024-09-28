import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-background/50 border-t border-gray-200 mt-10">
            <div className="container mx-auto p-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center md:text-left">
                        <h2 className="text-lg font-bold">Blogs.</h2>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                            Your go-to platform for insightful articles and community stories.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row md:gap-8 mt-4 md:mt-0">
                        <Link href="/" className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-200">Home</Link>
                        <Link href="/" className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-200">About</Link>
                        <Link href="/" className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-200">Blogs</Link>
                        <Link href="/" className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-200">Contact</Link>
                    </div>
                    <div className="flex mt-4 md:mt-0">
                        <Link href="/" className="mx-2 text-gray-600 hover:text-gray-800 dark:hover:text-gray-200">
                            <FaFacebook className="h-5 w-5" />
                        </Link>
                        <Link href="/" className="mx-2 text-gray-600 hover:text-gray-800 dark:hover:text-gray-200">
                            <FaTwitter className="h-5 w-5" />
                        </Link>
                        <Link href="/" className="mx-2 text-gray-600 hover:text-gray-800 dark:hover:text-gray-200">
                            <FaInstagram className="h-5 w-5" />
                        </Link>
                        <Link href="/" className="mx-2 text-gray-600 hover:text-gray-800 dark:hover:text-gray-200">
                            <FaLinkedin className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
                <div className="mt-6 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Blogs. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

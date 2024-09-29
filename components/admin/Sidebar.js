import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ModeToggle } from '../theme-button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'; // Ensure these are correct imports

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <Sheet>
                    <span className="mx-4">
                        <ModeToggle />
                    </span>
                    {/* Ensure that SheetTrigger is used inside the correct parent context */}
                    <SheetTrigger asChild>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle className="font-bold my-4">Blogs.</SheetTitle>
                            <SheetDescription>
                                <div className="flex flex-col gap-6">
                                    <ul className="space-y-4 mt-4">
                                        <li>
                                            <Link href="/admin">
                                                <Button variant="ghost" className="w-full justify-start">
                                                    Dashboard
                                                </Button>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/admin/users">
                                                <Button variant="ghost" className="w-full justify-start">
                                                    Users
                                                </Button>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/admin/blogs">
                                                <Button variant="ghost" className="w-full justify-start">
                                                    Blogs
                                                </Button>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/admin/addblog">
                                                <Button variant="ghost" className="w-full justify-start">
                                                    Add Blog
                                                </Button>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>

            {/* Sidebar */}
            <div className={`w-64 p-4 border-r ${isOpen ? 'block' : 'hidden'} md:block`}>
                <div className="ml-5">
                    <Link href="/admin" className="text-lg font-bold text-center">
                        Blogs.
                    </Link>
                </div>
                <ul className="space-y-4 mt-4">
                    <li>
                        <Link href="/admin">
                            <Button variant="ghost" className="w-full justify-start">
                                Dashboard
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/users">
                            <Button variant="ghost" className="w-full justify-start">
                                Users
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/blogs">
                            <Button variant="ghost" className="w-full justify-start">
                                Blogs
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/addblog">
                            <Button variant="ghost" className="w-full justify-start">
                                Add Blog
                            </Button>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;

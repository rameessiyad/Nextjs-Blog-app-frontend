'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../ui/sheet";
import { ModeToggle } from '../theme-button';
import { Button } from '../ui/button';
import useAuthStore from '@/store/auth-store';

const Navbar = () => {

    const { logout } = useAuthStore();

    const [loggedInUser, setLoggedInUser] = useState(null);

    useEffect(() => {
        const user = localStorage.getItem('loggedInUser');
        setLoggedInUser(user);
    }, []);

    //logout function
    const handleLogout = () => {
        logout();
        window.location.reload();
    }

    return (
        <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-10">
            <div className="container mx-auto flex justify-between items-center">
                <Link href={"/"}>
                    <div className="text-lg font-bold">
                        Blogs.
                    </div>
                </Link>
                <div className="hidden md:flex gap-8 items-center">
                    <Link href="/" className="hover:scale-105 hover:transition-transform hover:-translate-y-1 duration-300">
                        Home
                    </Link>
                    <Link href="/about" className="hover:scale-105 hover:transition-transform hover:-translate-y-1 duration-300">
                        About
                    </Link>
                    <Link href="/blogs" className={!loggedInUser ? 'hidden' : 'hover:scale-105 hover:transition-transform hover:-translate-y-1 duration-300'}>
                        Blogs
                    </Link>
                    <Link href="/contact" className="hover:scale-105 hover:transition-transform hover:-translate-y-1 duration-300">
                        Contact
                    </Link>
                    <div className="flex gap-2 items-center">
                        <Link href={"/login"}>
                            <Button className={!loggedInUser ? "mx-1" : "hidden"} variant="outline">Login</Button>
                        </Link>
                        <Link href={"/signup"}>
                            <Button className={!loggedInUser ? "mx-1" : "hidden"} variant="outline">Signup</Button>
                        </Link>
                        <Button
                            variant="outline"
                            className={loggedInUser ? "mx-1" : "hidden"}
                            onClick={handleLogout}
                        >Logout</Button>
                        <ModeToggle />
                    </div>
                </div>

                <div className="md:hidden">
                    <Sheet>
                        <span className="mx-4">
                            <ModeToggle />
                        </span>
                        <SheetTrigger>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle className="font-bold my-4">Blogs.</SheetTitle>
                                <SheetDescription>
                                    <div className="flex flex-col gap-6">
                                        <Link href="/">
                                            Home
                                        </Link>
                                        <Link href="/about">
                                            About
                                        </Link>
                                        <Link href="/blogs" className={!loggedInUser ? 'hidden' : ''}>
                                            Blogs
                                        </Link>
                                        <Link href="/contact">
                                            Contact
                                        </Link>
                                        <div>
                                            <Link href={"/login"}>
                                                <Button className={!loggedInUser ? "mx-1 text-xs" : "hidden"} variant="outline">Login</Button>
                                            </Link>
                                            <Link href={"/signup"}>
                                                <Button className={!loggedInUser ? "mx-1 text-xs" : "hidden"} variant="outline">Signup</Button>
                                            </Link>
                                            <Button
                                                variant="outline"
                                                className={loggedInUser ? "mx-1 text-xs" : "hidden"}
                                                onClick={handleLogout}>Logout</Button>
                                        </div>
                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

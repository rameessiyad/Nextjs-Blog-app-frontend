import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile Menu Button */}
            <div className="md:hidden p-4">
                <Button variant="outline" onClick={() => setIsOpen(!isOpen)}>
                    Menu
                </Button>
            </div>

            {/* Sidebar */}
            <div className={`w-64 p-4 border-r ${isOpen ? 'block' : 'hidden'} md:block`}>
                <div className="ml-5">
                    <Link href={"/admin"} className="text-lg font-bold text-center">
                        Blogs.
                    </Link>
                </div>
                <ul className="space-y-4 mt-4">
                    <li>
                        <Link href={"/admin"}>
                            <Button variant="ghost" className="w-full justify-start">
                                Dashboard
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/admin/users"}>
                            <Button variant="ghost" className="w-full justify-start">
                                Users
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/admin/blogs"}>
                            <Button variant="ghost" className="w-full justify-start">
                                Blogs
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/admin/addblog"}>
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

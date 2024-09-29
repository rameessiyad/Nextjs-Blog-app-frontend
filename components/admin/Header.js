import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
    return (
        <header className="w-full p-4 flex justify-between items-center border-b">
            <h1 className="text-xl font-bold">Blogs Admin Panel</h1>
            <Button variant="outline">Logout</Button>
        </header>
    );
};

export default Header;

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

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
                <ul className="space-y-4">
                    <li>
                        <Button variant="ghost" className="w-full justify-start">
                            Dashboard
                        </Button>
                    </li>
                    <li>
                        <Button variant="ghost" className="w-full justify-start">
                            Users
                        </Button>
                    </li>
                    <li>
                        <Button variant="ghost" className="w-full justify-start">
                            Products
                        </Button>
                    </li>
                    <li>
                        <Button variant="ghost" className="w-full justify-start">
                            Orders
                        </Button>
                    </li>
                    <li>
                        <Button variant="ghost" className="w-full justify-start">
                            Settings
                        </Button>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;

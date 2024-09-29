import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const AdminLayout = ({ children }) => {
    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            <Sidebar />
            <div className="flex-1">
                <Header />
                <main className="p-4">{children}</main>
            </div>
        </div>
    );
};

export default AdminLayout;

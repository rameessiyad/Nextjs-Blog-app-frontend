'use client';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '../theme-button';
import useAuthStore from '@/store/auth-store';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { fetcher } from '@/lib/fetcher';

const Header = () => {
    const { logout } = useAuthStore();
    const router = useRouter();

    const [loggedInUser, setLoggedInUser] = useState();

    useEffect(() => {
        const user = localStorage.getItem('loggedInUser');
        setLoggedInUser(user);
    }, []);

    const logoutMutation = useMutation({
        mutationFn: async () => {
            const response = await fetcher('/auth/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                Credentials: 'include'
            })

            return response;
        },
        onSuccess: (response) => {
            if (response.success) {
                logout();
                router.push('/login');
            } else {
                toast.error(error.message || 'Logout failed');
            }
        },

        onError: (error) => {
            console.log(error.message);
            toast.error(response.message || 'Logout failed');
        }
    })

    //logut function
    const handleLogout = () => {
        logoutMutation.mutate();
    }
    return (
        <header className="w-full p-4 flex justify-between items-center border-b">
            <div className="w-full flex items-center justify-between">
                <h1 className="text-xl font-bold">Admin Panel</h1>
                <div className="flex items-center">
                    <span className="mx-2">
                        <ModeToggle />
                    </span>
                    <Button
                        variant="outline"
                        onClick={handleLogout}
                    >Logout</Button>
                </div>
            </div>
        </header>
    );
};

export default Header;

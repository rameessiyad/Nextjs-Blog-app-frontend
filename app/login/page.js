'use client';
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { fetcher } from '@/lib/fetcher';
import { toast } from 'react-toastify';

const page = () => {
    const [formData, setFormData] = useState({
        usernameOrEmail: '',
        password: ''
    })

    const router = useRouter();

    //mutation for login
    const mutation = useMutation({
        mutationFn: async (data) => {
            const response = await fetcher('/auth/login', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
                Credentials: 'include'
            });
            return response;
        },
        onSuccess: (response) => {
            if (!response.success) {
                toast.error(response.message);
            } else {
                if (response.data === "admin") {
                    router.push('/admin')
                } else {
                    router.push('/')
                }
            }
        },
        onError: (error) => {
            console.log(error.message)
            toast.error(response.message)
        }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    //handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        mutation.mutate(formData);

    }

    return (
        <main className="flex items-center justify-center min-h-screen px-4 py-10">
            <div className="max-w-md w-full p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="usernameOrEmail" className="block text-sm font-medium">Username or Email</label>
                        <Input
                            id="usernameOrEmail"
                            type="text"
                            placeholder="Username or Email"
                            name="usernameOrEmail"
                            value={formData.usernameOrEmail}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium">Password</label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <Button type="submit" className="w-full">Login</Button>
                </form>
                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">Don't have an account? <Link href="/signup" className="text-blue-500 hover:underline">Create Account</Link></p>
                </div>
            </div>
        </main>
    );
};

export default page;

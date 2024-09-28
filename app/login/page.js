import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from 'next/link';

const page = () => {

    return (
        <main className="flex items-center justify-center min-h-screen px-4 py-10">
            <div className="max-w-md w-full p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form className="mt-6 space-y-4">
                    <div>
                        <label htmlFor="usernameOrEmail" className="block text-sm font-medium">Username or Email</label>
                        <Input
                            id="usernameOrEmail"
                            type="text"
                            placeholder="Username or Email"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium">Password</label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="password"
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

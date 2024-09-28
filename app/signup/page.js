import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import  Link from 'next/link';

const page = () => {

  return (
    <main className="flex items-center justify-center min-h-screen px-4 py-10">
      <div className="max-w-md w-full p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">Signup</h1>
        <form className="mt-6 space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium">Username</label>
            <Input 
              id="uesrname" 
              type="text" 
              placeholder="Enter username" 
              required 
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <Input 
              id="email" 
              type="email" 
              placeholder="Enter email" 
              required 
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <Input 
              id="password" 
              type="password" 
              placeholder="Enter password" 
              required 
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium">Password</label>
            <Input 
              id="confirmPassword" 
              type="password" 
              placeholder="Confirm password" 
              required 
            />
          </div>
          <Button type="submit"  className="w-full">Signup</Button>
        </form>
        
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">Don't have an account? <Link href="/login" className="text-blue-500 hover:underline">Login</Link></p>
        </div>
      </div>
    </main>
  );
};

export default page;

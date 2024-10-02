'use client';
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import { fetcher } from '@/lib/fetcher';
import { useRouter } from 'next/navigation';

const Page = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const router = useRouter();

 
  const mutation = useMutation({
    mutationFn: async (data) => {
      const response = await fetcher('/auth/register', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      });
      return response;
    },
    onSuccess: (response) => {
      if (!response.success) {
        toast.error(response.message);
      } else {
        router.push('/login');
      }
    },
    onError: (error) => {
      console.log(error.message);
      toast.error(response.message)
    }
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    // Trigger the mutation
    mutation.mutate(formData);
  };

  return (
    <main className="flex items-center justify-center min-h-screen px-4 py-10">
      <div className="max-w-md w-full p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">Signup</h1>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium">Username</label>
            <Input
              id="username"
              type="text"
              placeholder="Enter username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <Input
              id="email"
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <Input
              id="password"
              type="password"
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium">Confirm Password</label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={mutation.isLoading}>
            {mutation.isLoading ? 'Signing up...' : 'Signup'}
          </Button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">Don't have an account? <Link href="/login" className="text-blue-500 hover:underline">Login</Link></p>
        </div>
      </div>
    </main>
  );
};

export default Page;

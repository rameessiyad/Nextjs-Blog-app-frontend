'use client';
import { toast } from "react-toastify";

const BASE_URL = "http://localhost:5000/api/v1";

export const fetcher = async (endpoint, options = {}) => {
    const url = `${BASE_URL}${endpoint}`;

    try {
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            credentials: 'include',
            ...options,
        });

        console.log(`Fetching: ${url}`);


        // Handle response errors
        if (!response.ok) {
            console.log('Error fetching data');
        }

        // Parse and return JSON data
        return await response.json();
    } catch (error) {
        toast.error(error.message || 'An unexpected error occurred');
        throw error; 
    }
};

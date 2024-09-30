import { toast } from "react-toastify";

const BASE_URL = "http://localhost:5000/api/v1";

export const fetcher = async (endpoint, options = {}) => {
    const url = `${BASE_URL}${endpoint}`;

    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        },
        credentials: 'include',
        ...options
    })

    if (!response.ok) {
        const errorDetails = await response.json();
        toast.error(errorDetails.message || 'Something went wrong');
        throw new Error(errorDetails.message || 'Error fetching data');
    }

    const data = await response.json();
    return data;
}
'use client';

import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Bar } from 'react-chartjs-2'; 
import { useState } from 'react';

// Import necessary Chart.js components
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const page = () => {
    const [stats, setStats] = useState({
        users: 100,
        blogs: 45,
        comments: 150,
        views: [120, 80, 150, 200, 180, 300, 220],
    });

    // Chart.js data
    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Views',
                data: stats.views,
                backgroundColor: '#3b82f6', 
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Website Views Per Day',
            },
        },
    };

    return (
        <AdminLayout>
            <div className="p-4">
                <h2 className="text-2xl font-semibold mb-6">Welcome to the Admin Dashboard</h2>

                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card className="text-center cursor-pointer">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold">Users</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-3xl font-bold">{stats.users}</p>
                        </CardContent>
                    </Card>

                    <Card className="text-center cursor-pointer">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold">Blogs</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-3xl font-bold">{stats.blogs}</p>
                        </CardContent>
                    </Card>

                    <Card className="text-center cursor-pointer">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold">Comments</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-3xl font-bold">{stats.comments}</p>
                        </CardContent>
                    </Card>
                </div>

               
                <div className="w-full lg:w-2/3 mx-auto p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Weekly Views</h3>
                    <Bar data={data} options={options} />
                </div>
            </div>
        </AdminLayout>
    );
};

export default page;

'use client';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Bar } from 'react-chartjs-2';
import { useState, useEffect } from 'react';

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
import { fetcher } from '@/lib/fetcher';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const page = () => {
    const [stats, setStats] = useState({
        users: 0,
        blogs: 0,
        comments: 0,
        views: [120, 80, 150, 200, 180, 300, 220],
    });

    const fetchCounts = async () => {
        try {
            const [usersData, blogsData, commentsData] = await Promise.all([
                fetcher('/auth/users-count'),
                fetcher('/blog/blogs-count'),
                fetcher('/blog/comments-count'),
            ])

            setStats({
                users: usersData.data || 0,
                blogs: blogsData.data || 0,
                comments: commentsData.data || 0,
                views: stats.views,
            })
        } catch (error) {
            console.error('Error fetching counts:', error);
        }
    }

    useEffect(() => {
        fetchCounts();
    }, [])

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

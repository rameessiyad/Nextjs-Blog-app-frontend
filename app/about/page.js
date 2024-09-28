import React from 'react';
import Image from 'next/image';

const page = () => {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen px-4 py-10">
            <div className="container mx-auto max-w-4xl text-center">
                <h1 className="text-4xl font-bold">About Our Blog</h1>
                <p className="mt-4 text-lg">
                    Welcome to our blog! We are passionate about sharing insights, experiences, and knowledge on a variety of topics that matter to our community. Our goal is to create a space where readers can find valuable information, connect with like-minded individuals, and feel inspired.
                </p>
                <p className="mt-4 text-lg">
                    We believe in the power of storytelling and the impact of sharing ideas. Our writers come from diverse backgrounds, bringing unique perspectives and expertise to our content. Whether you’re looking for tips on personal development, travel adventures, or the latest trends in technology, you’ll find it all here.
                </p>
                <p className="mt-4 text-lg">
                    Thank you for visiting our blog! We hope you find our articles enjoyable and informative. Don’t forget to subscribe to our newsletter to stay updated on our latest posts.
                </p>

            </div>
        </main>
    );
};

export default page;

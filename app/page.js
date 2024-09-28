import TopBlogs from "@/components/TopBlogs";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col  items-center min-h-screen overflow-hidden">
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center max-w-screen-lg">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug font-bold md:text-4xl">
            Welcome to Blogs
          </h1>
          <p className="mt-4 text-lg">
            Discover insightful articles, personal experiences, and tips from our community of writers. Join us in exploring diverse topics that matter to you!
          </p>
          <br />
          <Button variant="outline">Login to read the blogs</Button>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <Image
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="tailwind css components"
            width={500}
            height={500}
            className="w-full h-full max-w-md mx-auto"
          />
        </div>
      </section>

      {/* Top Blogs Section */}
      <TopBlogs />

      {/* Newsletter Section */}
      <section className="py-10 w-full">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold">
            Subscribe to Our Newsletter
          </h2>
          <p className="mt-2">
            Stay updated with the latest blogs and articles. Enter your email below!
          </p>
          <form className="mt-4 flex justify-center">
            <input
              type="email"
              placeholder="Your Email Address"
              required
              className="p-2 rounded-l-md border focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary"
            />
            <button
              type="submit"
              className="p-2  rounded-r-md hover:bg-primary/70 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

import PostPage from "./default";
import Post from "@/data/post/2.json";
import Settings from "@/data/settings.json";
import Header from "@/components/blog/header";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Analytics } from "@vercel/analytics/react";

export default async function PostDefault({ params }) {
  return (
    <>
      <Header title={Post.title} img={Post?.mainImage.src} />
      <body className="text-gray-800 antialiased dark:bg-black dark:text-gray-400">
        <>
          <Navbar {...Settings} />

          <div>
            <PostPage post={Post} />
          </div>

          <Footer {...Settings} />
        </>
        <Analytics />
      </body>
    </>
  );
}

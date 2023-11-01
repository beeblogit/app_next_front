import HomePage from "./home";
import Post1 from "@/data/post/1.json";
import Post2 from "@/data/post/2.json";
import Post3 from "@/data/post/3.json";
import Post4 from "@/data/post/4.json";
import Post5 from "@/data/post/5.json";
import Settings from "@/data/settings.json";
import Header from "@/components/blog/header";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "./providers";

export default async function IndexPage() {
  const posts = [Post5, Post4, Post3, Post2, Post1];
  return (
    <>
      <Header title="Bee Blogit" img="/img/logo.png" />

      <body className="text-gray-800 antialiased dark:bg-black dark:text-gray-400">
        <Providers>
          <Navbar {...Settings} />

          <div>
            <HomePage posts={posts} />
          </div>

          <Footer {...Settings} />
        </Providers>
        <Analytics />
      </body>
    </>
  );
}

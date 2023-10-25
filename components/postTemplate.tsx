import { IPost, IImage } from "@/model/interfaces";
import Settings from "@/data/settings.json";
import Header from "@/components/blog/header";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Analytics } from "@vercel/analytics/react";
import { NextPage } from "next";
import { Providers } from "@/app/providers";

type Props = {
  post: IPost;
};

export default function PostDefault({
  post,
  PostPage,
}: {
  post: IPost;
  PostPage: NextPage<Props>;
}) {
  return (
    <>
      <Header
        title={post.title}
        img={post?.mainImage.src}
        tags={post?.tags}
        post={`/post/${post.slug.current}`}
        published={post?.publishedAt}
        author={post?.author.name}
      />
      <body className="text-gray-800 antialiased dark:bg-black dark:text-gray-400">
        <Providers>
          <Navbar {...Settings} />

          <div>
            <PostPage post={post} />
          </div>

          <Footer {...Settings} />
        </Providers>
        <Analytics />
      </body>
    </>
  );
}

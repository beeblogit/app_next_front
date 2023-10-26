import AuthorPage from "./default";
import author from "@/data/author/1.json";
import Header from "@/components/blog/header";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "@/app/providers";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Settings from "@/data/settings.json";

export default async function AuthorDefault({ params }) {
  const imageProps = author?.image;
  const desc = `My name is Nahuel Costamagna, and I have been actively involved in the IT industry since 2012. My main skills are FullStack Development, DevOps and Machine Learning. I am passionate about sharing my knowledge with others.`;

  return (
    <>
      <Header title={author.name} img={imageProps.src} desc={desc} />

      <body className="text-gray-800 antialiased dark:bg-black dark:text-gray-400">
        <Providers>
          <Navbar {...Settings} />

          <div>
            <AuthorPage author={author} desc={desc} />
          </div>

          <Footer {...Settings} />
        </Providers>
        <Analytics />
      </body>
    </>
  );
}

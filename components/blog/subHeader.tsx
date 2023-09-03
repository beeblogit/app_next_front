import { IPost, IImage } from "@/model/interfaces";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
//import "@/styles/buttons.css";
import { parseISO, format } from "date-fns";

import CategoryLabel from "@/components/blog/category";

export default function SubHeader({ post }: { post: IPost }) {
  const AuthorimageProps: IImage = post.author.image;

  const isAudio = post.audio != "";

  return (
    <Container className="!pt-0">
      <div className="mx-auto">
        <div className="flex justify-center">
          <CategoryLabel categories={post.categories} />
        </div>

        <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white md:text-4xl lg:text-5xl lg:leading-snug">
          {post.title}
        </h1>

        <div className="mt-6 flex flex-col items-center space-x-3 text-gray-500 md:flex-row md:justify-between ">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 flex-shrink-0">
              {AuthorimageProps && (
                <Link href={`/author/${post.author.slug.current}`}>
                  <Image
                    src={AuthorimageProps.src}
                    alt={post?.author?.name}
                    className="rounded-full object-cover"
                    fill
                    sizes="40px"
                  />
                </Link>
              )}
            </div>
            <div>
              <p className="text-gray-800 dark:text-gray-400">
                <Link href={`/author/${post.author.slug.current}`}>
                  {post.author.name}
                </Link>
              </p>
              <div className="flex items-center space-x-2 text-sm">
                <time
                  className="text-gray-500 dark:text-gray-400"
                  dateTime={post?.publishedAt}
                >
                  {format(parseISO(post?.publishedAt), "MMMM dd, yyyy")}
                </time>
                <span>· {post.estReadingTime || "5"} min read</span>
              </div>
            </div>
          </div>
          {isAudio && (
            <div className="mt-3 flex-col items-center gap-20 md:mt-0 md:flex">
              <audio controls id="tts-audio" controlsList="nodownload">
                <source src={`/audio/${post.audio}.mp3`} type="audio/mpeg" />
              </audio>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
import { notFound } from "next/navigation";

import { parseISO, format } from "date-fns";

import CategoryLabel from "@/components/blog/category";
import AuthorCard from "@/components/blog/authorCard";

import hljs from "highlight.js/lib/core";
import go from "highlight.js/lib/languages/go";
hljs.registerLanguage("go", go);

export default function Post(props) {
  const { loading, post } = props;
  //SyntaxHighlighterSet.registerLanguage("javascript", js);

  const slug = post?.slug;

  if (!loading && !slug) {
    notFound();
  }

  const imageProps = post?.mainImage;

  const AuthorimageProps = post?.author?.image;

  const code001 = hljs.highlight(
    `
var a uint16 = 213

fmt.Printf("Number %d in binary is %b\\n", a, a)
    `,
    { language: "go" }
  ).value;

  const code002 = hljs.highlight(
    `
// numero_binario << cantidad_de_veces_a_mover = resultado

fmt.Printf("Number %d in binary is %b\\n", a << 1, a << 1)
// 11010101 << 1  = 110101010 (lo movemos solo 1 vez)
  
fmt.Printf("Number %d in binary is %b\\n", a << 10, a << 10)
// 11010101 << 10 = 101010000000000 (lo movemos 10 veces)
  `,
    { language: "go" }
  ).value;
  return (
    <>
      <Container className="!pt-0">
        <div className="mx-auto max-w-screen-md ">
          <div className="flex justify-center">
            <CategoryLabel categories={post.categories} />
          </div>

          <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
            {post.title}
          </h1>

          <div className="mt-3 flex justify-center space-x-3 text-gray-500 ">
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
                    dateTime={post?.publishedAt || post._createdAt}
                  >
                    {format(
                      parseISO(post?.publishedAt || post._createdAt),
                      "MMMM dd, yyyy"
                    )}
                  </time>
                  <span>· {post.estReadingTime || "5"} min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
        {imageProps && (
          <Image
            src={imageProps.src}
            alt={post.mainImage?.alt || "Thumbnail"}
            loading="eager"
            fill
            sizes="100vw"
            className="object-cover"
          />
        )}
      </div>

      <Container>
        <article className="mx-auto max-w-screen-md ">
          <div className="prose mx-auto my-3 dark:prose-invert prose-a:text-blue-600">
            Welcom to my article, we are going to talk about binary operators in
            Go 😀
            <br />
            <br />
            With this functionality, we can perform operations with binary
            numbers. For example, we can have a variable <b>'A'</b> representing
            a binary number, another variable <b>'B'</b>, and use logical
            operators to perform operations that will result in a value{" "}
            <b>'X’</b>
            <table className="border-collapse border border-slate-400">
              <thead>
                <tr>
                  <th className="border border-slate-300 px-3 py-2">A</th>
                  <th className="border border-slate-300 px-3 py-2">B</th>
                  <th className="border border-slate-300 px-3 py-2">X</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-300 px-3 py-2">101</td>
                  <td className="border border-slate-300 px-3 py-2">100</td>
                  <td className="border border-slate-300 px-3 py-2"> ? </td>
                </tr>
                <tr>
                  <td className="border border-slate-300 px-3 py-2">001</td>
                  <td className="border border-slate-300 px-3 py-2">111</td>
                  <td className="border border-slate-300 px-3 py-2"> ? </td>
                </tr>
              </tbody>
            </table>
            <pre>
              <code dangerouslySetInnerHTML={{ __html: code001 }} />
            </pre>
            <pre>
              <code dangerouslySetInnerHTML={{ __html: code002 }} />
            </pre>
          </div>
          <div className="mb-7 mt-7 flex justify-center">
            <Link
              href="/"
              className="bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-blue-600 dark:text-blue-500 "
            >
              ← View all posts
            </Link>
          </div>
          {post.author && <AuthorCard author={post.author} />}
        </article>
      </Container>
    </>
  );
}

const MainImage = ({ image }) => {
  return (
    <div className="mb-12 mt-12 ">
      <Image {...image} alt={image.alt || "Thumbnail"} />
      <figcaption className="text-center ">
        {image.caption && (
          <span className="text-sm italic text-gray-600 dark:text-gray-400">
            {image.caption}
          </span>
        )}
      </figcaption>
    </div>
  );
};

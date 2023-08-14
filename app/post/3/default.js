import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
import { notFound } from "next/navigation";
import "@/styles/buttons.css";
import { parseISO, format } from "date-fns";

import CategoryLabel from "@/components/blog/category";
import AuthorCard from "@/components/blog/authorCard";
import Code from "@/components/blog/code";

export default function Post(props) {
  const { loading, post } = props;

  const slug = post?.slug;

  if (!loading && !slug) {
    notFound();
  }

  const imageProps = post?.mainImage;

  const AuthorimageProps = post?.author?.image;

  return (
    <div>
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
            <div className="mt-3 flex-col items-center gap-20 md:mt-0 md:flex">
              <audio controls id="tts-audio" controlsList="nodownload">
                <source src="/audio/3.mp3" type="audio/mpeg" />
              </audio>
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
          <div className="prose mx-auto my-3 dark:prose-invert lg:prose-xl prose-a:text-blue-600">
            <h2>Introduction</h2>
            <p>
              In the realm of Go programming, version 1.21 introduces a fresh
              perspective on the Maps Package. As a cornerstone of data
              manipulation, maps enable efficient key-value storage and
              retrieval. In this article, we&apos;ll delve into the enhanced
              features of Go 1.21&apos;s Maps Package, empowering you to harness
              its potential for streamlined coding and data management. Join us
              as we journey through the realm of key-value mastery with Go
              1.21&apos;s Maps Package.
            </p>
            <p>
              We will discuss the &apos;maps&apos; package, which allows us to
              perform various operations on maps in Go.
            </p>
            <p>
              The first step is to import the maps package (and we&apos;ll also
              import the fmt package to display the examples).
            </p>
            <Code lang="go">
              {`import (
    "fmt"
    "maps"
)`}
            </Code>
            <p>
              We&apos;re going to create a map that we&apos;ll use throughout
              the rest of the post.
            </p>
            <Code lang="go">
              {`myMap := map[string]int{
    "one":   1,
    "two":   2,
    "three": 3,
    "four":  4,
}`}
            </Code>
            <p>and we are going to see those methods next:</p>
            <ul>
              <li>
                <Link href="#clone" className="blog-link">
                  Clone
                </Link>
                : we can clone a map
              </li>
              <li>
                <Link href="#equal" className="blog-link">
                  Equal
                </Link>
                : we can compare 2 maps
              </li>
              <li>
                <Link href="#deletefunc" className="blog-link">
                  DeleteFunc
                </Link>
                : we can delete elements of the map
              </li>
              <li>
                <Link href="#copy" className="blog-link">
                  Copy
                </Link>
                : we can copy all map elements to other map
              </li>
            </ul>

            <p>
              As a clarification, there were 2 methods (<b>Values</b> and{" "}
              <b>Keys</b>) that were removed when the stable version 1.21 was
              released. Those methods were in beta. (commit{" "}
              <Link
                href="https://github.com/golang/go/commit/b25266c58debb831cd880a7372b197466e75b833"
                className="blog-link"
              >
                here
              </Link>
              )
            </p>

            <h2 id="clone">Clone</h2>
            <p>We can clone a map, creating another map:</p>
            <Code lang="go">
              {`myOtherMap := maps.Clone(myMap)

fmt.Printf("First Map %v \\nClone %v\\n", myMap, myOtherMap)`}
            </Code>
            <h5>Output:</h5>
            <Code lang="markdown">{`First Map map[four:4 one:1 three:3 two:2] 
Clone map[four:4 one:1 three:3 two:2]`}</Code>

            <hr className="my-12 h-0.5 border-t-0 bg-neutral-200 opacity-100" />
            <h2 id="equal">Equal</h2>
            <p>
              We can compare 2 maps. If both maps are equal, the method will
              return true; otherwise, it will return false.
            </p>
            <Code lang="go">{`resutl := maps.Equal(map1, map2)`}</Code>
            <p>Example:</p>
            <Code lang="go">
              {`r := maps.Equal(myMap, myOtherMap)

fmt.Printf("myMap:      %v \\nmyOtherMap: %v\\n", myMap, myOtherMap)
fmt.Printf("Compare %t\\n", r )

myMap["one"] = 11
r = maps.Equal(myMap, myOtherMap)

fmt.Printf("\\n\\nmyMap:      %v \\nmyOtherMap: %v\\n", myMap, myOtherMap)
fmt.Printf("Compare %t\\n", r )`}
            </Code>
            <h5>Output:</h5>
            <Code lang="markdown">{`myMap:      map[four:4 one:1 three:3 two:2] 
myOtherMap: map[four:4 one:1 three:3 two:2]
Compare true

myMap:      map[four:4 one:11 three:3 two:2] 
myOtherMap: map[four:4 one:1  three:3 two:2]
Compare false`}</Code>

            <hr className="my-12 h-0.5 border-t-0 bg-neutral-200 opacity-100" />
            <h2 id="deletefunc">DeleteFunc</h2>
            <p>
              We can delete one or many map elements. In the case of deletion,
              we can only use the &apos;Function&apos; functionality.
            </p>
            <Code lang="go">
              {`maps.DeleteFunc(myMap, func(key string, value int) bool {
    ...
})`}
            </Code>
            <p>When it returns true, the key/value pairs will be deleted.</p>

            <p>Example:</p>
            <p>We delete all elements that have the value &apos;one&apos;.</p>
            <Code lang="go">
              {`fmt.Printf("Original Map: %v\\n", myMap)

maps.DeleteFunc(myMap, func(k string, v int) bool {
    return k == "one"
})

fmt.Printf("with Deleted value %v\\n", myMap)`}
            </Code>
            <h5>Output:</h5>
            <Code lang="markdown">{`Original Map: map[four:4 one:1 three:3 two:2]
with Deleted value map[four:4 three:3 two:2]`}</Code>

            <hr className="my-12 h-0.5 border-t-0 bg-neutral-200 opacity-100" />
            <h2 id="copy">Copy</h2>
            <p>we can capy all key/values pairs in src adding them to dst.</p>

            <p>
              When a key in src is already present in dst, the value in dst will
              be overwritten by the associeted with the key in src.
            </p>

            <Code lang="go">{`maps.Copy(dst, src)`}</Code>
            <p>Example:</p>

            <Code lang="go">
              {`dst := map[string]int{
    "four":4, 
    "ten":10,
    "three":3,
    "two":2,
}

src := map[string]int {
    "four":44, 
    "nine":9,
    "one":1,
    "three":3,
    "two":2,
}

fmt.Printf("dst: %v \\nsrc: %v\\n", dst, src)

maps.Copy(dst, src)
 
fmt.Printf("\\ncopied variable (dst): %v\\n", dst)`}
            </Code>
            <h5>Output:</h5>
            <Code lang="markdown">{`dst: map[four:4 ten:10 three:3 two:2] 
src: map[four:44 nine:9 one:1 three:3 two:2]

copied variable (dst): map[four:44 nine:9 one:1 ten:10 three:3 two:2]`}</Code>

            <h2>Conclusion</h2>

            <p>
              To sum up, the Go maps package is a versatile and efficient tool
              for managing key-value pairs. By mastering this package, we gain a
              fundamental skill to handle various programming tasks effectively.
              Let&apos;s harness the power of maps to elevate our Go programming
              endeavors, for more information you can see the Go official site{" "}
              <Link href="https://pkg.go.dev/maps" className="blog-link">
                here
              </Link>
            </p>

            <p>
              resource:{" "}
              <Link
                href="https://github.com/beeblogit/blog_go_v21_maps"
                className="blog-link"
              >
                blog_go_v21_maps
              </Link>
            </p>
          </div>
          <div className="mb-7 mt-7 flex justify-center">
            <Link
              href="/"
              className="bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-blue-600 dark:text-blue-500"
            >
              ← View all posts
            </Link>
          </div>
          {post.author && <AuthorCard author={post.author} />}
        </article>
      </Container>
    </div>
  );
}

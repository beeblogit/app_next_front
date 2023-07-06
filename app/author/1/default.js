import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";

export default function Post(props) {
  const { loading, author } = props;
  const imageProps = author?.image;
  return (
    <>
      <Container>
        <article className="mx-auto max-w-screen-md ">
          <div className="mt-3 rounded-2xl bg-gray-50 px-8 py-8 text-gray-500 dark:bg-gray-900 dark:text-gray-400">
            <div className="flex flex-wrap items-start sm:flex-nowrap sm:space-x-6">
              <div className="relative mt-1 h-24 w-24 flex-shrink-0 ">
                {imageProps && (
                  <Link href={`/author/${author.slug.current}`}>
                    <Image
                      src={imageProps.src}
                      alt={author.name}
                      className="rounded-full object-cover"
                      fill
                      sizes="96px"
                    />
                  </Link>
                )}
              </div>
              <div>
                <div className="mb-3">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
                    About {author.name}
                  </h3>
                </div>
                <div>
                  My name is <b>Nahuel Costamagna</b>, and I have been actively
                  involved in the IT industry since 2012. My main skills are{" "}
                  <b>FullStack Development</b>, <b>DevOps</b> and{" "}
                  <b>Machine Learning</b>.<br />I am passionate about sharing my
                  knowledge with others.
                </div>
                <div className="mt-3">
                  <Link
                    href={`/`}
                    className="bg-brand-secondary/20 rounded-full py-2 text-sm text-blue-600 dark:text-blue-500 "
                  >
                    View all posts
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
      </Container>
    </>
  );
}

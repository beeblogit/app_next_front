import PostPage from "./default";

export default async function PostDefault({ params }) {
  const post = {
    title: "Binary Operators in Golang 2",
    categories: [
      {
        title: "Programing",
        color: "blue",
        slug: {
          current: "123",
        },
      },
    ],
    excerpt: "12",
    mainImage: {
      blurDataURL: "",
      src: "/img/post/1/header.webp",
      alt: "",
    },
    author: {
      name: "Nahuel Costamagna",
      image: {
        src: "/img/authors/nahuel.png",
        blurDataURL: "",
        alt: "",
      },
      slug: {
        current: "12212",
      },
    },
    slug: {
      current: "12212",
    },
    publishedAt: "2023-04-30T00:00:00Z",
  };
  return <PostPage post={post} />;
}

// export const revalidate = 60;

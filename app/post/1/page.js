import PostPage from "./default";

export default async function PostDefault({ params }) {
  const post = {
    title: "Binary Operators in Golang",
    estReadingTime: "15",
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
      src: "/img/post/1/header.png",
      alt: "",
    },
    author: {
      name: "Nahuel Costamagna",
      position: "FullStack Developer & DevOps",
      image: {
        src: "/img/authors/nahuel.png",
        blurDataURL: "",
        alt: "",
      },
      slug: {
        current: "1",
      },
    },
    slug: {
      current: "1",
    },
    publishedAt: "2023-07-14T00:00:00Z",
  };
  return <PostPage post={post} />;
}

// export const revalidate = 60;

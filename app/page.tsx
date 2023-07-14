import HomePage from "./home";

export default async function IndexPage() {
  const posts = [
    {
      title: "Binary Operators in Golang",
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
    },
  ];

  return <HomePage posts={posts} />;
}

import HomePage from "./home";

export default async function IndexPage() {
  const posts = [
    {
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
        src: "https://media.springernature.com/lw703/springer-static/image/art%3A10.1038%2F528452a/MediaObjects/41586_2015_Article_BF528452a_Figg_HTML.jpg",
        alt: "",
      },
      author: {
        name: "Nahuel Costamagna",
        image: {
          src: "https://media.springernature.com/lw703/springer-static/image/art%3A10.1038%2F528452a/MediaObjects/41586_2015_Article_BF528452a_Figg_HTML.jpg",
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
    },
    {
      title: "Binary Operators in Golang",
      excerpt: "",
      mainImage: {
        blurDataURL: "",
        src: "https://media.springernature.com/lw703/springer-static/image/art%3A10.1038%2F528452a/MediaObjects/41586_2015_Article_BF528452a_Figg_HTML.jpg",
        alt: "",
      },
      author: {
        name: "Nahuel Costamagna",
        image: {
          src: "https://media.springernature.com/lw703/springer-static/image/art%3A10.1038%2F528452a/MediaObjects/41586_2015_Article_BF528452a_Figg_HTML.jpg",
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
    },
    {
      title: "Binary Operators in Golang",
      excerpt: "",
      mainImage: {
        blurDataURL: "",
        src: "https://media.springernature.com/lw703/springer-static/image/art%3A10.1038%2F528452a/MediaObjects/41586_2015_Article_BF528452a_Figg_HTML.jpg",
        alt: "",
      },
      author: {
        name: "Nahuel Costamagna",
        image: {
          src: "https://media.springernature.com/lw703/springer-static/image/art%3A10.1038%2F528452a/MediaObjects/41586_2015_Article_BF528452a_Figg_HTML.jpg",
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
    },
    {
      title: "Binary Operators in Golang",
      excerpt: "",
      mainImage: {
        blurDataURL: "",
        src: "https://media.springernature.com/lw703/springer-static/image/art%3A10.1038%2F528452a/MediaObjects/41586_2015_Article_BF528452a_Figg_HTML.jpg",
        alt: "",
      },
      author: {
        name: "Nahuel Costamagna",
        image: {
          src: "https://media.springernature.com/lw703/springer-static/image/art%3A10.1038%2F528452a/MediaObjects/41586_2015_Article_BF528452a_Figg_HTML.jpg",
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
    },
  ];

  return <HomePage posts={posts} />;
}

import AuthorPage from "./default";

export default async function AuthorDefault({ params }) {
  const author = {
    name: "Nahuel Costamagna",
    image: {
      src: "/img/authors/nahuel.png",
      blurDataURL: "",
      alt: "",
    },
    slug: {
      current: "1",
    },
  };
  return <AuthorPage author={author} />;
}

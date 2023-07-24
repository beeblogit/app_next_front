import AuthorPage from "./default";
import Author from "@/data/author/1.json";

export default async function AuthorDefault({ params }) {
  return <AuthorPage author={Author} />;
}

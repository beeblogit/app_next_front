import HomePage from "./home";
import Post1 from "@/data/post/1.json";
import Post2 from "@/data/post/2.json";

export default async function IndexPage() {
  const posts = [Post2, Post1];
  return <HomePage posts={posts} />;
}

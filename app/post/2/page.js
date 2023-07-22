import PostPage from "./default";
import Post from "@/data/post/2.json";

export default async function PostDefault({ params }) {
  return <PostPage post={Post} />;
}

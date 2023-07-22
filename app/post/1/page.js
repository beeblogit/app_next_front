import PostPage from "./default";
import Post from "@/data/post/1.json";

export default async function PostDefault({ params }) {
  return <PostPage post={Post} />;
}

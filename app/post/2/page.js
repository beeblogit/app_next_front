import PostPage from "./default";
import Post from "@/data/post/2.json";
import PostTemplate from "@/components/postTemplate";

export default async function PostDefault({ params }) {
  return <PostTemplate post={Post} PostPage={PostPage} />;
}

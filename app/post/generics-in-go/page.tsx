import PostPage from "./default";
import Post from "@/data/post/5.json";
import PostTemplate from "@/components/postTemplate";

export default async function PostDefault() {
  return <PostTemplate post={Post} PostPage={PostPage} />;
}

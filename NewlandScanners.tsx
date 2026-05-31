import BlogPostLayout from "@/components/blog/BlogPostLayout";
import { getPostBySlug } from "@/data/blogPosts";

const post = getPostBySlug("mobiele-computers-en-scanners-van-newland")!;

export default function NewlandScanners() {
  return <BlogPostLayout post={post} />;
}

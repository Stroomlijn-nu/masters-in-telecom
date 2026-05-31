import BlogPostLayout from "@/components/blog/BlogPostLayout";
import { getPostBySlug } from "@/data/blogPosts";

const post = getPostBySlug(
  "samsung-knox-wat-het-is-en-waarom-het-voor-jou-telt",
)!;

export default function SamsungKnox() {
  return <BlogPostLayout post={post} />;
}

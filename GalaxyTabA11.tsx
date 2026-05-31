import BlogPostLayout from "@/components/blog/BlogPostLayout";
import { getPostBySlug } from "@/data/blogPosts";

const post = getPostBySlug(
  "samsung-galaxy-tab-a11-plus-ook-voor-accessoires-bij-masters-in-telecom",
)!;

export default function GalaxyTabA11() {
  return <BlogPostLayout post={post} />;
}

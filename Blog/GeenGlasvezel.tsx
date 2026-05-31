import BlogPostLayout from "@/components/blog/BlogPostLayout";
import { getPostBySlug } from "@/data/blogPosts";

const post = getPostBySlug("wat-doe-je-als-er-geen-glasvezel-beschikbaar-is")!;

export default function GeenGlasvezel() {
  return <BlogPostLayout post={post} />;
}

import BlogEditPage from "@/features/blog/BlogEditPage";

const BlogEdit = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  return <BlogEditPage slug={slug} />;
};

export default BlogEdit;

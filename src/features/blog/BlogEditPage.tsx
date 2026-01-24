import { FC } from "react";
import EditBlogForm from "./components/EditBlogForm";

interface BlogEditPageProps {
  slug: string;
}

const BlogEditPage: FC<BlogEditPageProps> = ({ slug }) => {
  return (
    <div className="container mx-auto px-4">
      <EditBlogForm slug={slug} />
    </div>
  );
};

export default BlogEditPage;

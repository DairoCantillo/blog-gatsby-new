import React from "react";
import BlogLayout from "../../layouts/BlogLayout";
import Seo from "../../components/seo/Seo";
import "./Post.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Post = ({ pageContext }) => {
  const { data: post } = pageContext;
  return (
    <BlogLayout className="post">
      <Seo
        title={post.title}
        description={post.description}
        image={post.cover.file.url}
      />
      <h1>{post.title}</h1>
      <div className="markdown-body">
        {documentToReactComponents(JSON.parse(post.article.raw))}
      </div>
    </BlogLayout>
  );
};
export default Post;

import React from "react";
import { graphql } from "gatsby";
import PostList from "../components/postList/PostList";
import Pagination from "../components/pagination/Pagination";
import BlogLayout from "../layouts/BlogLayout";
import Seo from "../components/seo/Seo";
import imageBlog from "../images/web-programacion.jpg";

const Blog = ({ data, pageContext }) => {
  const posts = data.allContentfulPost.nodes;

  return (
    <BlogLayout>
      <Seo
        title="Blog sobre programción"
        description="Web sobre Desarrollo Web, programación JavaScript, React, Node, Electron, Next, Gatsby, Angular..."
        image={imageBlog}
      />
      <h1>Blog</h1>
      <PostList posts={posts} />
      <Pagination pageContext={pageContext} />
    </BlogLayout>
  );
};

export default Blog;

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allContentfulPost(
      skip: $skip
      limit: $limit
      sort: { fields: createdAt, order: DESC }
    ) {
      nodes {
        title
        id
        description
        path
        cover {
          gatsbyImageData(
            placeholder: DOMINANT_COLOR
            jpegProgressive: true
            formats: AUTO
            backgroundColor: "gray"
          )
          file {
            url
          }
        }

        article {
          raw
        }
      }
    }
  }
`;

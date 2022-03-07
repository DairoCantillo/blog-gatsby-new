const path = require("path");
const { paginate } = require("gatsby-awesome-pagination");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  // Fetch your items (blog posts, categories, etc).
  const posts = await graphql(`
    query {
      allContentfulPost(sort: { fields: createdAt, order: DESC }) {
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
        edges {
          node {
            cover {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  `);

  //   Create your paginated pages
  paginate({
    createPage, // The Gatsby `createPage` function
    items: posts.data.allContentfulPost.nodes, // An array of objects
    itemsPerPage: 6, // How many items you want per page
    pathPrefix: "/", // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve(`src/templates/Blog.jsx`), // Just like `createPage()`
  });
  posts.data.allContentfulPost.nodes.forEach((post) => {
    createPage({
      path: `/${post.path}`,
      component: path.resolve(`src/templates/post/Post.jsx`),
      context: {
        data: post,
      },
    });
  });
};

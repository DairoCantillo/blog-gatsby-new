import React from "react";
import { Grid, Card, Icon } from "semantic-ui-react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { map } from "lodash";
import moment from "moment";
import "moment/locale/es";
import "./PostList.scss";


const PostList = ({ posts }) => {
  const getImageCustom = (data) => {
    return getImage(data);
  };
  return (
    <Grid className="post-list">
      {map(posts, (post) => (
        <Grid.Column key={post.id} mobile={16} tablet={16} computer={5}>
          <Link to={`/${post.path}`}>
            <Card className="post-list__item">
              <GatsbyImage image={getImageCustom(post.cover)} alt={post.title}/>
              <Card.Content className="" >
                <Card.Header>{post.title}</Card.Header>
              </Card.Content>
              <Card.Content extra>
                <Card.Meta>
                  <Icon name="calendar alternate outline" />
                  {moment(post.createdAt).format("LL")}
                </Card.Meta>
              </Card.Content>
            </Card>
          </Link>
        </Grid.Column>
      ))}
    </Grid>
  );
};
export default PostList;

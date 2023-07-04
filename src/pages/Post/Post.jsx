import React, { useEffect, useState } from 'react'
import { Body, CommentsContainer, Content, Grid, Header, ImageWrapper, PostContainer, Wrapper } from './Post.styles'

import { useParams } from 'react-router-dom';
import { useFetchDocument } from '../../hooks/useFetchDocument';
import { Container } from '../../globalStyles';

export default function Post() {

  const { id } = useParams();
  const { document: post, loading } = useFetchDocument("posts", id)
  const { document: posts, loading: postsLoading } = useFetchDocument("posts")

  const [postDate, setPostDate] = useState("");

  function getPostDate(item) {
    var date = item.toDate();
    var day = date.getDate();
    var month = (date.getMonth());
    var year = date.getFullYear();

    switch (month) {
      case 0:
        setPostDate(`JAN ${day}, ${year}`);
        break;
      case 1:
        setPostDate(`FEB ${day}, ${year}`);
        break;
      case 2:
        setPostDate(`MAR ${day}, ${year}`);
        break;
      case 3:
        setPostDate(`APR ${day}, ${year}`);
        break;
      case 4:
        setPostDate(`MAY ${day}, ${year}`);
        break;
      case 5:
        setPostDate(`JUN ${day}, ${year}`);
        break;
      case 6:
        setPostDate(`JUL ${day}, ${year}`);
        break;
      case 7:
        setPostDate(`AUG ${day}, ${year}`);
        break;
      case 8:
        setPostDate(`SEP ${day}, ${year}`);
        break;
      case 9:
        setPostDate(`OCT ${day}, ${year}`);
        break;
      case 10:
        setPostDate(`NOV ${day}, ${year}`);
        break;
      case 11:
        setPostDate(`DEC ${day}, ${year}`);
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    if (post) {
      getPostDate(post.createdAt);
    }
  }, [post, postDate])

  return (
    <Wrapper>
      <Container>
        <Grid>
          {loading && <p>Carregando post...</p>}
          {post && (
            <>
              <PostContainer>
                <ImageWrapper>
                  <img src={post.image} alt={post.title} />
                </ImageWrapper>
                <Content>
                  <Header>
                    <div>
                      <span>{postDate}</span>
                      {post.tagsArray[0]}
                    </div>
                    <h2>{post.title}</h2>
                  </Header>
                  <Body>
                    <p>
                      {post.body}
                    </p>
                  </Body>
                </Content>
                <CommentsContainer>
                  <span>0 Comments</span>
                </CommentsContainer>
              </PostContainer>
            </>
          )}
        </Grid>
        {/* {posts &&
          posts.map((item, key) => (
            
          ))} */}
      </Container>
    </Wrapper>
  )
}

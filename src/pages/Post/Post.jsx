import React, { useEffect, useState } from 'react'
import { Aside, AsideSection, AsideTitle, Body, Categories, CommentsContainer, Content, Grid, Header, ImageWrapper, PostContainer, RecentPosts, Wrapper } from './Post.styles'

import { useNavigate, useParams } from 'react-router-dom';
import { useFetchDocument } from '../../hooks/useFetchDocument';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { Container } from '../../globalStyles';

import DataHeader from '../../components/DataHeader/DataHeader';
import CardRecentPost from '../../components/CardRecentPost/CardRecentPost';

export default function Post() {

  const { id } = useParams();

  const { document: post, loading } = useFetchDocument("posts", id);

  const { documents: posts, loading: loadingPosts } = useFetchDocuments("posts");

  const navigate = useNavigate();

  const [recentPosts, setRecentPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  const showFilterOptions = async () => {

    let list = [];

    posts.forEach((item) => {
      //Se a marca não estiver inclusa na lista
      item.tagsArray.forEach((tag) => {
        if (!list.includes(tag)) {
          setCategories(current => [...current, tag]);
          list.push(tag);
        }
      })
    })
  }

  useEffect(() => {
    if (posts) {
      for (let i = 0; i < 6; i++) {
        if (posts[i].id !== id) {
          setRecentPosts(current => [...current, posts[i]]);
        }
      }

      showFilterOptions();
    }
  }, [posts])

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
                    <DataHeader data={post} />
                    <h2>{post.title}</h2>
                  </Header>
                  <Body
                    dangerouslySetInnerHTML={{
                      __html: post.body,
                    }}
                  >
                  </Body>
                </Content>
                <CommentsContainer>
                  <span>0 Comments</span>
                </CommentsContainer>
              </PostContainer>
            </>
          )}
          <Aside>
            <AsideSection>
              <AsideTitle>Recent Posts</AsideTitle>
              {posts && recentPosts &&
                recentPosts.map((item, key) => (
                  <CardRecentPost post={item} key={key} />
                ))}
            </AsideSection>
            <AsideSection>
              <AsideTitle>Categories</AsideTitle>
              <Categories>
                {categories &&
                  categories.map((item) => (
                    <li>
                      <a href="#!">
                        {item}
                      </a>
                    </li>
                  ))}
              </Categories>
            </AsideSection>
          </Aside>
        </Grid>
      </Container>
    </Wrapper>
  )
}

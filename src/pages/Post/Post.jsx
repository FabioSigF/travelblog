import React, { useEffect, useState } from 'react'
import { Aside, AsideSection, AsideTitle, Author, AuthorAvatar, AuthorInfo, AuthorSocial, Body, Categories, CommentsContainer, Content, Grid, Header, ImageWrapper, PostContainer, Wrapper, Container } from './Post.styles'

import { Link, useNavigate, useParams } from 'react-router-dom';
import { useFetchDocument } from '../../hooks/useFetchDocument';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { iconList } from '../../globalStyles';

import DataHeader from '../../components/DataHeader/DataHeader';
import CardRecentPost from '../../components/CardRecentPost/CardRecentPost';

export default function Post() {

  const { id } = useParams();

  const { document: post, loading } = useFetchDocument("posts", id);

  const { documents: posts, loading: loadingPosts } = useFetchDocuments("posts");

  const { documents: authors} = useFetchDocuments("profiles");

  const navigate = useNavigate();

  const [recentPosts, setRecentPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [author, setAuthor] = useState(undefined);

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
      for (let i = 0; i < posts.length; i++) {
        if (posts[i].id !== id) {
          setRecentPosts(current => [...current, posts[i]]);
        }
      }
      showFilterOptions();
    }
  }, [posts, id])

  useEffect(() => {
    if(post && authors)
    {
      console.log(authors);
      authors.forEach((author) => {
        if(author.uid === post.uid)
        {
          setAuthor(author);
        }
      })
    }
  }, [post, author, authors])
  return (
    <Wrapper>
      <Container>
        <Grid>
          {loading && <p>Carregando post...</p>}
          {post && (
            <>
              <PostContainer>
                <Header>
                  <DataHeader data={post} />
                  <h2>{post.title}</h2>
                </Header>
                <ImageWrapper>
                  <img src={post.image} alt={post.title} />
                </ImageWrapper>
                <Content>
                  <Body
                    dangerouslySetInnerHTML={{
                      __html: post.body,
                    }}
                  >
                  </Body>
                </Content>
                {author && (
                  <Author>
                    <AuthorAvatar src={author.avatar} alt={author.name} />
                    <AuthorInfo>
                      <h2>{author.name}</h2>
                      <p>{author.description}</p>
                      <AuthorSocial>
                        <li>
                          <a href={author.facebook}>{iconList.facebook}</a>
                        </li>
                        <li>
                          <a href={author.twitter}>{iconList.twitter}</a>
                        </li>
                        <li>
                          <a href={author.instagram}>{iconList.instagram}</a>
                        </li>
                        <li>
                          <a href={author.linkedin}>{iconList.linkedin}</a>
                        </li>
                      </AuthorSocial>
                    </AuthorInfo>
                  </Author>
                )}
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
                  categories.map((item, key) => (
                    <li key={key}>
                      <Link to={`/search?q=${item}`}>
                        {item}
                      </Link>
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

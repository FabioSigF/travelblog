import React, { useEffect, useState } from 'react'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { PostNotFound, Wrapper } from './Search.styles';
import { Link, useNavigate } from 'react-router-dom';
import PostDetail from '../../components/PostDetail/PostDetail';
import PageHeader from '../../layout/PageHeader/PageHeader';
import { useQuery } from '../../hooks/useQuery';
import Container from '../../layout/Container/Container';
import ButtonMain from '../../components/Buttons/ButtonMain/ButtonMain';

export default function Search() {

  const query = useQuery();
  const search = query.get("q");
  const navigate = useNavigate();
  const { documents: posts } = useFetchDocuments("posts");
  const [searchPosts, setSearchPosts] = useState([]);

  useEffect(() => {
    if (posts) {
      setSearchPosts([]);

      posts.forEach((post) => {
        if (post.title && post.tagsArray) {
          if (post.title.toLowerCase().includes(search.toLowerCase()) || post.tagsArray.includes(search.toLowerCase())) {
            setSearchPosts(current => [...current, post]);
          }
        }
      })
    }
  }, [posts, search])

  return (
    <Wrapper>
      <PageHeader>
        <h2>Search: {search}</h2>
      </PageHeader>
      <div>
        <Container>
          {!searchPosts && (
            <PostNotFound>
              <p>Não foram encontrados posts a partir da sua busca...</p>
              <ButtonMain onClick={()=> navigate("/")} >Voltar</ButtonMain>
            </PostNotFound>
          )}

          {searchPosts && searchPosts.length === 0 && (
            <PostNotFound>
              <p>Não foram encontrados posts a partir da sua busca...</p>
              <ButtonMain onClick={()=> navigate("/")} >Voltar</ButtonMain>
            </PostNotFound>
          )}

          {searchPosts &&
            searchPosts.map((post) => (
              <PostDetail key={post.id} data={post} />
            ))}
        </Container>
      </div>
    </Wrapper>
  )
}

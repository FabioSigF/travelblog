import React from 'react'
import { ButtonNewPost, Content, Flex, NoPosts, Post, PostHeader, PostRow, Title, Wrapper } from './Dashboard.styles'
import { Container, PageHeader, iconList } from '../../globalStyles'
import { Link, useNavigate } from 'react-router-dom'
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useDeleteDocument } from '../../hooks/useDeleteDocument';
import { useAuthValue } from '../../context/AuthContext';
export default function Dashboard() {

  const { user } = useAuthValue()
  const uid = user.uid;

  const { documents: posts, loading } = useFetchDocuments("posts", null, uid);
  const { deleteDocument } = useDeleteDocument("posts")

  const navigate = useNavigate();

  return (
    <Wrapper>
      <PageHeader>
        <h2>DashBoard</h2>
      </PageHeader>
      <Container>
        <Content>
          <Flex>
            <Title>Gerencie os seus posts</Title>
            <ButtonNewPost
              onClick={()=>navigate("/post/create")}
            >{iconList.plus}New Post</ButtonNewPost>
          </Flex>
          {/*Colocar botão de criar post */}
          {posts && posts.length === 0 ? (
            <NoPosts>
              <p>Nâo foram encontrados posts</p>
              <Link to="posts/create">Criar primeiro post</Link>
            </NoPosts>
          ) : (
            <Post>
              <PostHeader>
                <span>Título</span>
                <span>Ações</span>
              </PostHeader>
              {posts && posts.map((post) => (
                <PostRow key={post.id}>
                  <p>{post.title}</p>
                  <div>
                    <Link to={`/posts/${post.id}`} >Ver</Link>
                    <Link to={`/posts/edit/${post.id}`}>Editar</Link>
                    <button onClick={() => deleteDocument(post.id)}>Excluir</button>
                  </div>
                </PostRow>
              ))}
            </Post>
          )}
        </Content>
      </Container>
    </Wrapper>
  )
}

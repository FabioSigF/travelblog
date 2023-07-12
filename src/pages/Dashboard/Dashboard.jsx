import React, { useState } from 'react'
import { ButtonNewPost, Content, DeleteWarning, DeleteWarningContent, Flex, NoPosts, Post, PostHeader, PostRow, Title, Wrapper } from './Dashboard.styles'
import { iconList } from '../../globalStyles'
import Container from '../../layout/Container/Container';
import PageHeader from '../../layout/PageHeader/PageHeader';
import { Link, useNavigate } from 'react-router-dom'
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useDeleteDocument } from '../../hooks/useDeleteDocument';
import { useStateContext } from '../../context/ContextProvider';
export default function Dashboard() {

  const { user } = useStateContext()
  const uid = user.uid;

  const { documents: posts, loading } = useFetchDocuments("posts", null, uid);
  const { deleteDocument } = useDeleteDocument("posts")

  const [deleteAdvertise, setDeletePost] = useState(false);
  const [deleteAdvertiseId, setDeletePostId] = useState("");

  const navigate = useNavigate();

  return (
    <>
      <Wrapper>
        <PageHeader>
          <h2>DashBoard</h2>
        </PageHeader>
        <Container>
          <Content>
            <Flex>
              <Title>Gerencie os seus posts</Title>
              <ButtonNewPost
                onClick={() => navigate("/post/create")}
              >{iconList.plus}New Post</ButtonNewPost>
            </Flex>
            {/*Colocar botão de criar post */}
            {posts && posts.length === 0 ? (
              <NoPosts>
                <p>Nâo foram encontrados posts</p>
                <Link to="/post/create">Criar primeiro post</Link>
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
                      <button onClick={() => {
                        setDeletePostId(post.id)
                        setDeletePost(true)
                      }}>Excluir</button>
                    </div>
                  </PostRow>
                ))}
              </Post>
            )}
          </Content>
        </Container>
      </Wrapper>

      {deleteAdvertise && (
        <DeleteWarning>
          <DeleteWarningContent>
            <p>Você tem certeza que deseja excluir permanentemente a postagem?</p>
            <div>
              <button onClick={() => setDeletePost(false)}>Voltar</button>
              <button onClick={() => {
                deleteDocument(deleteAdvertiseId)
                setDeletePost(false)
              }}>Deletar</button>
            </div>
          </DeleteWarningContent>
        </DeleteWarning>
      )
      }
    </>
  )
}

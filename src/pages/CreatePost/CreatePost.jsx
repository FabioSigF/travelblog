import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';
import { useInsertDocument } from '../../hooks/useInsertDocument'
import { Content, Wrapper, Header, Form, BodyContainer } from './CreatePost.styles';
import { Container, PageHeader } from '../../globalStyles';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import ButtonMain from '../../components/Buttons/ButtonMain/ButtonMain';


export default function CreatePost() {

  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")

  console.log(body);
  
  const { insertDocument, response } = useInsertDocument("posts")
  const { user } = useAuthValue()

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    //validar url image
    try {
      new URL(image)
    } catch (error) {
      setFormError('A imagem precisa ser uma URL.')
    }
    //criar o array de tags
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase())
    //checar todos os valores
    if (!title || !image || !tags || !body) {
      setFormError('Por favor, preencha todos os campos.')
    }
    if (formError) return;

    insertDocument({
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName
    })

    //redirect home page
    navigate("/");
  }
  return (
    <Wrapper>
      <PageHeader>
        <h2>
          New Post
        </h2>
      </PageHeader>
      <Container>
        <Content>
          <Header>
            <span>Criar post</span>
            <p>Escreva sobre o que você quiser e compartilhe o seu conhecimento.</p>
          </Header>
          <Form onSubmit={handleSubmit}>
            <label>
              <span>Título:</span>
              <input
                type="text"
                name='title'
                required
                placeholder='Pense em um bom título'
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </label>
            <label>
              <span>URL da imagem :</span>
              <input
                type="text"
                name='image'
                required
                placeholder='Insira uma imagem que represente o seu post'
                onChange={(e) => setImage(e.target.value)}
                value={image}
              />
            </label>
            <BodyContainer>
              <span>
                Body:
              </span>
              <ReactQuill
                theme="snow"
                value={body}
                onChange={setBody}
                className='bodyItem'
              />
            </BodyContainer>
            <label>
              <span>Tags:</span>
              <input
                type="text"
                name='tags'
                required
                placeholder='Insira as tags separadas por vírgula'
                onChange={(e) => setTags(e.target.value)}
                value={tags}
              />
            </label>
            {!response.loading &&
              <ButtonMain className="btn">Criar Post</ButtonMain>
            }
            {response.loading &&
              <ButtonMain className="btn" disabled>Aguarde...</ButtonMain>
            }
            {response.error &&
              <p className="error">{response.error}</p>
            }
            {formError &&
              <p className="error">{formError}</p>
            }
          </Form>
        </Content>
      </Container>
    </Wrapper>
  )
}

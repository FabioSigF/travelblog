import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFetchDocument } from '../../hooks/useFetchDocument';
import { useUpdateDocument } from '../../hooks/useUpdateDocument';
import { BodyContainer, Content, Form, Header, Wrapper } from './EditPost.styles';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Container, PageHeader } from '../../globalStyles';
import ButtonMain from '../../components/Buttons/ButtonMain/ButtonMain';
import { useStateContext } from '../../context/ContextProvider';

export default function EditPost() {
  const { id } = useParams()
  const { document: post } = useFetchDocument("posts", id);

  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")

  useEffect(() => {

    if (post) {
      setTitle(post.title)
      setBody(post.body)
      setImage(post.image)
      const textTags = post.tagsArray.join(",")
      setTags(textTags)
    }

  }, [post])


  const { updateDocument, response } = useUpdateDocument("posts")
  const { user } = useStateContext()

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

    const data = {
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName
    }
    updateDocument(id, data)

    //redirect home page
    navigate("/dashboard")
  }
  return (
    <Wrapper>
      <PageHeader>
        <h2>
          Edit Post
        </h2>
      </PageHeader>
      <Container>
        <Content>
          {post && (
            <>
              <Header>
                <h2>Editando post: {post.title}</h2>
                <p>Altere os dados do post como desejar.</p>
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
                <label>Preview da imagem atual:</label>
                <img src={post.image} alt={post.title} />
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
                  <ButtonMain className="btn">Editar</ButtonMain>
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
            </>
          )}
        </Content>
      </Container>
    </Wrapper>
  )
}

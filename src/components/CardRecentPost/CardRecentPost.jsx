import React from 'react'
import { Background, Description, Title, Wrapper } from './CardRecentPost.styles'
import DataHeader from '../DataHeader/DataHeader'
import { useNavigate } from 'react-router-dom'

export default function CardRecentPost({ post }) {

  const navigate = useNavigate();

  return (
    <Wrapper onClick={() => {
      navigate(`/posts/${post.id}`)
      window.location.reload()
    }}>
      <Background background={post.image} />
      <Description>
        <DataHeader data={post} noTag={true}/>
        <Title>{post.title}</Title>
      </Description>
    </Wrapper>
  )
}

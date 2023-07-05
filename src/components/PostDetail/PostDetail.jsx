import React, { useEffect, useState } from 'react'
import { Content, ContentWrapper, Image, ImageContainer, Info, Title, Wrapper } from './PostDetail.styles'
import ButtonMain from '../Buttons/ButtonMain/ButtonMain';
import { useNavigate } from 'react-router-dom';
import DataHeader from '../DataHeader/DataHeader';

export default function PostDetail({ data, reverse }) {

  const navigate = useNavigate();

  return (
    <Wrapper reverse={reverse} onClick={()=>navigate(`/posts/${data.id}`)}>
      <ContentWrapper>
        <Content>
          <DataHeader data={data}/>
          <Title>{data.title}</Title>
          <ButtonMain>Discover</ButtonMain>
        </Content>
      </ContentWrapper>
      <ImageContainer className='postDetail__container'>
        <Image background={data.image} className='postDetail__bg' />
      </ImageContainer>
    </Wrapper>
  )
}

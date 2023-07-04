import React, { useEffect, useState } from 'react'
import { Content, ContentWrapper, Image, ImageContainer, Info, Title, Wrapper } from './PostDetail.styles'
import ButtonMain from '../Buttons/ButtonMain/ButtonMain';
import { useNavigate } from 'react-router-dom';

export default function PostDetail({ data, reverse }) {

  const [heroDate, setHeroDate] = useState("");

  function getHeroDate(item) {
    var date = item.toDate();
    var day = date.getDate();
    var month = (date.getMonth());
    var year = date.getFullYear();

    switch (month) {
      case 0:
        setHeroDate(`JAN ${day}, ${year}`);
        break;
      case 1:
        setHeroDate(`FEB ${day}, ${year}`);
        break;
      case 2:
        setHeroDate(`MAR ${day}, ${year}`);
        break;
      case 3:
        setHeroDate(`APR ${day}, ${year}`);
        break;
      case 4:
        setHeroDate(`MAY ${day}, ${year}`);
        break;
      case 5:
        setHeroDate(`JUN ${day}, ${year}`);
        break;
      case 6:
        setHeroDate(`JUL ${day}, ${year}`);
        break;
      case 7:
        setHeroDate(`AUG ${day}, ${year}`);
        break;
      case 8:
        setHeroDate(`SEP ${day}, ${year}`);
        break;
      case 9:
        setHeroDate(`OCT ${day}, ${year}`);
        break;
      case 10:
        setHeroDate(`NOV ${day}, ${year}`);
        break;
      case 11:
        setHeroDate(`DEC ${day}, ${year}`);
        break;
      default:
        break;
    }
  }

  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      getHeroDate(data.createdAt);
    }
  }, [])

  return (
    <Wrapper reverse={reverse} onClick={()=>navigate(`/posts/${data.id}`)}>
      <ContentWrapper>
        <Content>
          <Info><span>{heroDate}</span>{data.tagsArray[0]}</Info>
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

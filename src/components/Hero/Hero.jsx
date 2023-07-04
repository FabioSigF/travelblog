import React, { useEffect, useState } from 'react'
import { Buttons, Content, Description, HeroBackground, Info, Title, Wrapper } from './Hero.styles'
import { Container, circleDotted } from '../../globalStyles';

export default function Hero({ data }) {

  const [heroDate, setHeroDate] = useState("");
  const [description, setDescription] = useState("");

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

  function showShortDescription() {
    if (data.body.length > 150) {
      setDescription(data.body.substring(0, 150) + '...');
    }
  }

  useEffect(() => {
    console.log(data);
    if (data) {
      getHeroDate(data.createdAt);
      showShortDescription();
    }
  }, [])

  return (
    <Wrapper>
      {data && (
        <HeroBackground background={data.image}>
          <Container>
            <Content>
              <Info>
                <span>
                  {heroDate}
                </span>
                JOURNEY
              </Info>
              <Title>
                {data.title}
              </Title>
              <Description>
                {description}
              </Description>
              <Buttons>
                
              </Buttons>
            </Content>
          </Container>
        </HeroBackground>
      )}
    </Wrapper>
  )
}
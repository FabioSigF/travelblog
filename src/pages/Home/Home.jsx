import React from 'react'
import { Button, Description, HeroContainer, HeroWrapper, Main, Posts, Title, Welcome, Wrapper } from './Home.styles'


//Swiper Slider
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation } from 'swiper'
import 'swiper/css';
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import Hero from '../../components/Hero/Hero';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';

import logoDecoration from '../../assets/imgs/img.png';
import welcomeTitleBg from '../../assets/imgs/welcome.jpg'
import { circleDotted, iconList } from '../../globalStyles';
import PostDetail from '../../components/PostDetail/PostDetail';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
export default function Home() {

  const { documents: hero, loading: heroLoading } = useFetchDocuments("hero");

  const { documents: posts, loading: loading } = useFetchDocuments("posts");

  return (
    <>
      <Wrapper>
        <HeroContainer>
          <Swiper
            navigation={true}
            spaceBetween={100}
            modules={[EffectFade, Autoplay, Navigation]}
            effect={"fade"}
            autoplay={{
              delay: 10000,
            }}
            className="mySwiper">
            {hero &&
              hero.map((item, key) => (
                <SwiperSlide key={key}>
                  <HeroWrapper>
                    <Hero data={item} />
                  </HeroWrapper>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </HeroContainer>
        <Main>
          <Welcome>
            <img src={logoDecoration} alt="Behold logo" />
            <span>Welcome to Behold</span>
            <Title background={welcomeTitleBg}>
              Travels Worth Retelling
            </Title>
            <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus tristique augue, rhoncus aliquam ipsum. Donec id dolor a neque.</Description>
            <Button>
              Scroll
              {iconList.arrowDown}
              {circleDotted.svg}
            </Button>
          </Welcome>
          <Posts>
            <ul>
              {posts &&
                posts.map((item, key) => (
                  <li key={key}>
                    <a href="#!">
                      <PostDetail data={item} />
                    </a>
                  </li>
                ))}
            </ul>
          </Posts>
          <Footer/>
        </Main>
      </Wrapper>
    </>
  )
}

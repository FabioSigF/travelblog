import { styled } from "styled-components";
import { colors, deviceSize, fFamily, fSize, pseudoCfg } from "../../globalStyles";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${deviceSize.laptop}){
    flex-direction: row;
    justify-content: flex-end;
    gap: 1rem;
    min-height: 100vh;
    margin-left: 80px;
  }
`
export const HeroContainer = styled.section`
  
  height: 100vh;
  @media screen and (max-width: ${deviceSize.tablet}){
    height: calc(100vh - 74px);
  }

  @media screen and (min-width: ${deviceSize.laptop}){
    position: fixed;
    top: 0;
    left: 80px;
    bottom: 0;  
    width: 40%;
  }

  //Slide buttons
  & .swiper-button-prev,
  & .swiper-button-next {
    top: auto;
    bottom: 1.5rem;
    border: 2px dotted ${colors.textGray};
    border-radius: 50%;
    padding: 1rem 1.25rem;
  }

  & .swiper-button-prev {
    left: 2.5rem;
  }
  & .swiper-button-next {
    right: 2.5rem;
  }

  & .swiper-button-prev::after,
  & .swiper-button-next::after {
    font-size: 1rem;
    color: ${colors.textLight};
  }

  & .swiper-button-prev::after{
    position: absolute;
    left: 14px;
  }
  & .swiper-button-next::after{
    position: absolute;
    right: 14px;
  }

`

export const HeroWrapper = styled.div`
  width: 100%;
  height: 100vh;
  @media screen and (max-width: ${deviceSize.tablet}){
    height: calc(100vh - 74px);
  }
`

export const Main = styled.main`

  @media screen and (min-width: ${deviceSize.laptop}){
    width: calc(60% + 1rem);
  }

`

export const Welcome = styled.section`
  position: relative;
  background-color: ${colors.bgGray};
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  justify-content: flex-end;
  padding: 2rem 4rem;
  
  span {
    font-family: ${fFamily.other};
    font-size: ${fSize.small};
    font-weight: 500;
    letter-spacing: 3px;
    text-transform: uppercase;
    text-align: center;
  }
  
  @media screen and (min-width: ${deviceSize.laptop}){
    height: 100vh;

    span {
      font-size: ${fSize.textSmaller};
    }
  }
`

export const Title = styled.h2`
  background: ${props => `url(${props.background})`};
  background-clip: text;
  font-size: 53px;
  font-weight: 700;
  color: transparent;
  text-align: center;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (min-width: ${deviceSize.laptop}){
    font-size: ${fSize.large};
  }
`

export const Description = styled.p`
  color: ${colors.textDark};
  text-align: center;
  font-size: ${fSize.textLarger};
  line-height: ${`calc(${fSize.textLarger} + .5rem)`};
  margin-bottom: 2rem;
  
  @media screen and (min-width: ${deviceSize.laptop}){
    max-width: 80%;
  }
`

export const Button = styled.button`
  color: ${colors.main};
  cursor: auto;
  font-size: ${fSize.small};
  font-weight: 700;
  text-transform: uppercase;
  
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  position: relative;
  width: 72px;
  height: 72px;

  svg {
    position: absolute;
    font-size: ${fSize.textSmaller};
    bottom: .85rem;
  }

`

export const Posts = styled.section`
  @media screen and (min-width: ${deviceSize.tablet}) and (max-width: ${deviceSize.laptop}) {
    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      li a article{
        height: 100%;
      }
    }
  }
  @media screen and (min-width: ${deviceSize.laptop}){
    ul li:nth-child(2n) a article
    {
      flex-direction: row-reverse;
    }
    ul li:nth-child(3n) a article
    {
      display: block;
      color: ${colors.textLight};
    
      h2 {
        color: ${colors.textLight};
      }
    
      div {
        width: 100%;
      }
      
      &:hover {
        button {
          color: ${colors.textLight}
        }
      }
    
      .postDetail__container {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
      
        &::after {
          ${pseudoCfg}
          width: 100%;
          height: 100%;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 1;
          background: linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(255,255,255,0) 100%);
        }
      }
    }
  }
`
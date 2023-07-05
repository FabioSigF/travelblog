import { styled } from "styled-components";
import { colors, deviceSize, fSize, pseudoCfg, transition } from "../../globalStyles";

export const Wrapper = styled.article `
  display: flex;
  position: relative;
  &:hover {
    .postDetail__bg {
      transform: scale(1.1);
    }

    button {
      color: ${colors.textDark};
    }
  }

  @media screen and (max-width: ${deviceSize.laptop}){
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
`
export const ImageContainer = styled.div `
  position: relative;
  overflow: hidden;
  width: 100%;
  
  @media screen and (max-width: ${deviceSize.laptop}) {
    height: 50vh;
  }
  @media screen and (min-width: ${deviceSize.laptop}){
    width: 50%;
  }
`
export const Image = styled.div `
  background-color: black;
  background: ${props => `url(${props.background})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  transition: ${transition.default};
`

export const ContentWrapper = styled.div `
  padding: 3rem;
  display: flex;
  align-items: center;
  width: 50%;
`

export const Content = styled.div `
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
`

export const Title = styled.h2 `
  font-size: ${fSize.title};
  font-weight: 700;
  margin-bottom: 2rem;
`
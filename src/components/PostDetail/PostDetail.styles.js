import { styled } from "styled-components";
import { colors, fFamily, fSize, pseudoCfg, transition } from "../../globalStyles";

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
  
`
export const ImageContainer = styled.div `
  position: relative;
  overflow: hidden;
  width: 50%;
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

export const Info = styled.div `
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${colors.main};
  font-family: ${fFamily.other};
  font-size: ${fSize.small};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  span {
    position: relative;
    &::before {
      ${pseudoCfg}
      background: ${colors.bgDottedVertical};
      width: 2px;
      height: 60%;
      top: 2px;
      bottom: 0;
      right: -.55rem;
    }
  }
`

export const Title = styled.h2 `
  font-size: ${fSize.title};
  font-weight: 700;
  margin-bottom: 2rem;
`
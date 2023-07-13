import { styled } from "styled-components";
import { colors, deviceSize, fFamily, fSize, pseudoCfg } from "../../globalStyles";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
`

export const HeroBackground = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: ${props => `url(${props.background}) `};
  background-position: bottom;
  background-size: cover;

  display: flex;
  align-items: flex-end;  

  &::after {
        ${pseudoCfg}
        width: 100%;
        height: 100%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        background: linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(255,255,255,0) 100%);
      }
  `

export const Content = styled.div`
  position: relative;
  color: ${colors.textLight};
  z-index: 2;
  @media screen and (min-width: ${deviceSize.laptop}){
    padding: 3rem;
  }
  
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: ${fFamily.other};
  font-size: ${fSize.textSmaller};
  letter-spacing: 3px;
  margin-bottom: 1rem;
  span {
    position: relative;
    &::before {
      ${pseudoCfg}
      background: ${colors.bgDottedVerticalWhite};
      width: 2px;
      height: 60%;
      top: 2px;
      bottom: 0;
      right: -.55rem;
    }
  }
`

export const Title = styled.h2`
  font-size: ${fSize.titleLarger};
  font-weight: 700;
  color: ${colors.textLight};
  margin-bottom: 2rem;

  @media screen and (min-width: ${deviceSize.laptop}){
    font-size: ${fSize.largeSmaller};
  }
`

export const Description = styled.p`
  color: ${colors.textLight};
  font-size: ${fSize.text};
  line-height: ${`calc(${fSize.text} + .5rem)`};
  margin-bottom: 5rem;

  @media screen and (min-width: ${deviceSize.laptop}){
    font-size: ${fSize.textLarger};
    line-height: ${`calc(${fSize.textLarger} + .5rem)`};
    margin-bottom: 2rem;
  }
`

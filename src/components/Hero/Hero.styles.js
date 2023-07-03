import { styled } from "styled-components";
import { colors, fFamily, fSize, pseudoCfg } from "../../globalStyles";

export const Wrapper = styled.div `
  width: 100%;
  height: 100%;
`

export const HeroBackground = styled.div `
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: ${props => `url(${props.background}) `};
  background-position: bottom;
  background-size: cover;

  display: flex;
  align-items: flex-end;
  padding: 3rem;
`

export const Content = styled.div `
  color: ${colors.textLight};
`

export const Info = styled.div `
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

export const Title = styled.h2 `
  font-size: ${fSize.largeSmaller};
  font-weight: 700;
  color: ${colors.textLight};
  margin-bottom: 2rem;

  .qodef-dotted-circle-svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    stroke-linecap: round;
    stroke-dasharray: 0.6px,4px;
    fill: none;
    stroke: currentColor;
    stroke-width: 2px;
    overflow: visible;
    stroke-width: 1.5px;
  }
`

export const Description = styled.p `
  color: ${colors.textLight};
  font-size: ${fSize.textLarger};
  line-height: ${`calc(${fSize.textLarger} + .5rem)`};
  margin-bottom: 2rem;
`

export const Buttons = styled.div `

`


import { styled } from "styled-components";
import { colors, fSize, pseudoCfg } from "../../globalStyles";

export const Wrapper = styled.footer`
  background-color: ${colors.bgGray};
  background: ${props => props.background && `url(${props.background})`};
  background-size: cover;
  background-repeat: no-repeat;
  padding: 3rem;
  
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;

  span {
    color: ${colors.textGray};
  }
  p {
    text-align: center;
    font-size: ${fSize.textLarger};
    line-height: ${`calc(${fSize.textLarger} + .5rem)`};
    margin-bottom: 2rem;
    width: 50%;
  }

`

export const Social = styled.div `
  position: relative;
  width: 100%;
  max-width: 200px;
  padding-top: 1rem;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    a {
      color: ${colors.textGray};

      &:hover {
        color: ${colors.textDark};
      }
    }
  }

  &::before {
    ${pseudoCfg}
    top: 0;
    left: 0;
    right: 0;
    background: ${colors.bgDottedHorizontal};
    height: 2px;
  }
`
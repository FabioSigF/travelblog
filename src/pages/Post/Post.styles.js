import { styled } from "styled-components";
import { colors, deviceSize, fFamily, fSize, pseudoCfg } from "../../globalStyles";

export const Wrapper = styled.div `
  position: relative;
  padding-top: 3rem;
`

export const Grid = styled.div `


  @media screen and (max-width: ${deviceSize.laptop}){
    display: flex;
    flex-direction: column ;
    gap: 2rem;
  }

    @media screen and (min-width: ${deviceSize.laptop}){
    display: grid;
    grid-template-columns: 4fr 1fr;
    gap: 2rem;
  }
`

export const PostContainer = styled.section `

`

export const Content = styled.div `
  padding-bottom: 4rem;
  border-bottom: 1px solid ${colors.textGray};
`

export const ImageWrapper = styled.div `
  position: relative;
  margin-bottom: 2rem;
  img {
    display: block;
    margin: auto;
    max-width: 100%;
  }
`

export const Header = styled.header `
  
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${colors.main};
    font-family: ${fFamily.other};
    font-size: ${fSize.small};
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 2rem;
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
  }

  h2 {
    font-size: ${fSize.titleLarger};
    font-weight: 600;
    margin-bottom: 2rem;
  }
`

export const Body = styled.div `
  p, a, li {
    color: ${colors.textGray};
    font-size: ${fSize.textLarger};
    line-height: ${`calc(${fSize.textLarger} + .5rem)`};
  }

  img {
    display: block;
    margin: auto;
    max-width: 100%;
  }

  h2 {
    font-size: ${fSize.title};
    font-weight: 500;
    padding-bottom: 1rem;
  }

  h3 {
    font-size: ${fSize.textLarger};
    font-weight: 500;
    padding-bottom: 1rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    li {
      list-style: circle;
      margin-left: 3rem;

    }
  }

  a {
    font-weight: 600;
  }
`

export const CommentsContainer = styled.div `
  margin-top: 2rem;
  span {
    color: ${colors.textDark};
    font-size: ${fSize.title};
    font-family: ${fFamily.title};
    font-weight: 600;
  }
`

export const Aside = styled.aside `
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const AsideSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px dotted ${colors.textGray};
`

export const AsideTitle = styled.span `
  font-family: ${fFamily.title};
  font-size: ${fSize.textLarger};
  font-weight: 600;
`

export const Categories = styled.ul `

  li a {
    color: ${colors.textGray};
    font-family: ${fFamily.other};
    font-size: ${fSize.textSmaller};
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
    display: block;
    &:hover {
      color: ${colors.textDark};
    }
  }

  li:not(:last-child)
  {
    margin-bottom: 1rem;
  }
`

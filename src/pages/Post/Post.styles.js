import { styled } from "styled-components";
import { colors, fFamily, fSize, pseudoCfg } from "../../globalStyles";

export const Wrapper = styled.div `
  position: relative;
  padding-top: 3rem;
`

export const Grid = styled.div `
  display: grid;
  grid-template-columns: 4fr 1fr;
  gap: 1rem;
`

export const RecentPosts = styled.aside `

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
    max-width: 100%;
  }
`

export const Header = styled.header `
  
  margin-bottom: 1rem;
  
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
  p {
    font-size: ${fSize.textLarger};
    line-height: ${`calc(${fSize.text} + .5rem)`};
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
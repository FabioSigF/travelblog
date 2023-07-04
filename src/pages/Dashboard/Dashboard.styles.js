import { styled } from "styled-components";
import { colors, fSize } from "../../globalStyles";

export const Wrapper = styled.div `

`

export const Content = styled.div `
  margin-top: 3rem;
`

export const Title = styled.p `
  color: ${colors.textDark};
  font-size: ${fSize.textLarger};
  font-weight: 500;
  margin-bottom: 2rem;
`

export const NoPosts = styled.div `
  text-align: center;

  p {
    margin-bottom: 1rem;
  }
`

export const Post = styled.div `

`

export const PostHeader = styled.div `
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-weight: 700;
  border-bottom: 2px solid ${colors.textGray};
  color: ${colors.textDark};
  
  span:nth-child(2){
    padding-right: 8.5rem;
  }
`

export const PostRow = styled.div `
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  border-bottom: 1px solid #eee;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  a, button {
    border-radius: 5px;
    color: ${colors.textGray};
    padding: .5rem .5rem;
    font-size: ${fSize.textSmaller};

  }
  a {
    &:hover {
      background-color: ${colors.main};
      color: ${colors.textLight};
    }
  }

  button:hover {
    background-color: ${colors.danger};
    color: ${colors.textLight};
  }
`
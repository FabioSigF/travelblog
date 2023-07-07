import { styled } from "styled-components";
import { colors, deviceSize, fSize, transition } from "../../globalStyles";

export const Wrapper = styled.div `

`

export const Content = styled.div `
  padding-top: 3rem;
  padding-bottom: 3rem;
`

export const Flex = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`

export const Title = styled.p `
  color: ${colors.textDark};
  font-size: ${fSize.textLarger};
  font-weight: 500;
`

export const ButtonNewPost = styled.button `
  padding: .5rem 1rem;
  background-color: ${colors.success};
  border-radius: 5px;
  color: ${colors.textLight};
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: .5rem;
  transition: ${transition.default};
  border: 2px solid ${colors.bgLight};

  &:hover {
    border-color: ${colors.success};
  }
`

export const NoPosts = styled.div `
  text-align: center;
  padding-bottom: 2rem;
  p {
    margin-bottom: 1rem;
  }
  a {
    color: ${colors.success};

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

    @media screen and (max-width: ${deviceSize.tablet}){
      padding-left: 1rem;
    }
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

export const DeleteWarning = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.5);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  
`

export const DeleteWarningContent = styled.div`
  background-color: ${colors.bgLight};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 2rem 1.5rem;

  p {
    color: ${colors.textDark};
    font-weight: 600;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  button {
    border-radius: 5px;
    font-size: ${fSize.textSmaller};
    font-weight: 600;
    padding: .5rem .5rem;

    &:nth-child(1)
    {
      color: ${colors.textDark};
    }

    &:nth-child(2)
    {
      color: ${colors.textLight};
      background-color: ${colors.danger};

      &:hover {
        background-color: ${colors.danger};
      }
    }
  }
`
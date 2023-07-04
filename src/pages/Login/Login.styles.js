import { styled } from "styled-components";

export const Wrapper = styled.div `
  position: relative;
  width: 100%;
  height: 100vh;
`

export const Grid = styled.div `
  display: grid;
  grid-template-columns: .4fr .6fr;
  position: relative;
  width: 100%;
  height: 100%;
`

export const Background = styled.div `
  background: ${props => props.background && `url(${props.background})`};
  background-position: center;
  background-size: cover;
`

export const LoginSection = styled.section `
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
`

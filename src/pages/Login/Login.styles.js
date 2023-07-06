import { styled } from "styled-components";
import { deviceSize } from "../../globalStyles";

export const Wrapper = styled.div `
  position: relative;
  width: 100%;
  height: 100vh;
  @media screen and (max-width: ${deviceSize.tablet}){
    height: calc(100vh - 74px);
  }

  @media screen and (max-width: ${deviceSize.tablet}){
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Grid = styled.div `

  @media screen and (min-width: ${deviceSize.tablet}){
    display: grid;
    grid-template-columns: .4fr .6fr;
    position: relative;
    width: 100%;
    height: 100%;  
  }
`

export const Background = styled.div `
  display: none;
  @media screen and (min-width: ${deviceSize.tablet}){
    background: ${props => props.background && `url(${props.background})`};
    background-position: center;
    background-size: cover;
    display: block;
  }
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

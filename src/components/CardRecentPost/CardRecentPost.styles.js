import { styled } from "styled-components";

export const Wrapper = styled.div `
  display: flex;
  gap: 1rem;
  position: relative;
`

export const Background = styled.div `
  background: ${props => props.background && `url(${props.background})`};
  background-size: cover;
  background-position: center;
  min-width: 89px;
  height: 89px;
`

export const Description = styled.div `
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Title = styled.h3 `
  font-weight: 500;
`
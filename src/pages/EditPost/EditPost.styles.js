import { styled } from "styled-components";
import { colors, fSize } from "../../globalStyles";

export const Wrapper = styled.div `

`

export const Content = styled.div `
  padding-bottom: 3rem;
`

export const Header = styled.div `
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;

  h2 {
    font-size: ${fSize.title};
  }
  span {
    color: ${colors.textDark};
    font-size: ${fSize.textLarger};
    font-weight: 500;
  }
`

export const Form = styled.form `  
  display: flex;
  flex-direction: column;
  gap: 2rem;

  label {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  input {
    width: 100%;
    max-width: 100%;
  }
`

export const BodyContainer = styled.div `
  width: 100%;
  height: 50vh; 
  margin-bottom: 4.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  .bodyItem {
    height: 100%;
  }
`
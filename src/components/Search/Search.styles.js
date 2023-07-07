import { styled } from "styled-components";
import { colors } from "../../globalStyles";

export const Wrapper = styled.div `
  form {
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
  }
  input {
    padding-right: 2.5rem;
  }
`

export const Icon = styled.div `
  position: absolute;
  right: 1rem;
  color: ${colors.textGray};
`

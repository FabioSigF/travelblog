import { styled } from "styled-components";
import { colors, fSize } from "../../globalStyles";

export const Wrapper = styled.div `
  padding: 3rem 0;
  text-align: center;
  width: 100%;
  background-color: ${colors.bgGray};
  margin-bottom: 3rem;
  h2 {
    font-size: ${fSize.title};
    font-weight: 600;
  }
`
import { styled } from "styled-components";
import { deviceSize } from "./globalStyles";

export const AppWrapper = styled.div `

  @media screen and (min-width: ${deviceSize.laptop}){
    margin-left: 80px;
  }
`
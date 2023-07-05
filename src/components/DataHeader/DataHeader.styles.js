import { styled } from "styled-components";
import { colors, fFamily, fSize, pseudoCfg } from "../../globalStyles";

export const Wrapper = styled.div `
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${colors.main};
  font-family: ${fFamily.other};
  font-size: ${fSize.small};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
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
`
import { styled } from "styled-components";
import { colors, fFamily, fSize, pseudoCfg, transition } from "../../../globalStyles";

export const Wrapper = styled.button `
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .35rem;
  
  text-transform: uppercase;
  font-family: ${fFamily.other};
  font-size: ${fSize.textSmaller};
  font-weight: 600;
  color: ${colors.main};

  position: relative;
  svg
  {
    transform: translateX(0);
    transition: transform 200ms ease-in-out;
  }
  span {
    position: relative;
    &::before {
      ${pseudoCfg}
      width: 100%;
      height: 2px;
      bottom: 0;
      background: ${colors.bgDottedHorizontal};
    }
  }
  &:hover {
    color: ${colors.textDark};

    svg {
      transform: translateX(.2rem);
    }
  }

`
import { styled } from "styled-components";
import { colors, fSize, pseudoCfg, transition } from "../../globalStyles";

export const Wrapper = styled.header`
  background-color: ${colors.bgGray};
  padding: 2rem 1rem;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 80px;
  height: 100vh;
  z-index: 999;
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  position: relative;
`
export const LogoWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  &::before {
    ${pseudoCfg}
    bottom: -1rem;
    left: 0;
    right: 0;
    width: 100%;
    background: repeating-linear-gradient(90deg,#919a99,#919a99 2px,transparent 2px,transparent 4px);
    height: 2px;
  }
`
export const NavButton = styled.button`
  position: relative;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid ${colors.textGray};
  display: flex;
  align-items: center;
  justify-content: center;

  transition: ${transition.default};

  &:hover {
    border-color: ${colors.textDark};
    
    &::before,
    &::after{
      background-color: ${colors.textDark};
    }
  }
  &::before,
  &::after {
    ${pseudoCfg}
    width: 20px;
    height: 2px;
    background-color: ${colors.textGray};
    transition: ${transition.default};
  }

  &::before {
    top: 16px;
    ${props => props.navbutton && ({
    top: '19px',
    transform: 'rotateZ(45deg)',
  })}
  }

  &::after {
    top: 22px;
    ${props => props.navbutton && ({
    top: '19px',
    transform: 'rotateZ(-45deg)',
  })}
  }
  
`

export const Social = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  font-size: 25px;
  color: ${colors.textGray};

  &:hover {
    color: ${colors.textDark};
  }

  &::before {
    ${pseudoCfg}
    top: -1rem;
    left: 0;
    right: 0;
    width: 100%;
    background: repeating-linear-gradient(90deg,#919a99,#919a99 2px,transparent 2px,transparent 4px);
    height: 2px;
  }
`

export const Nav = styled.nav`
  
`
import React, { useState } from 'react'
import { Flex, LogoWrapper, Nav, NavButton,  NavSocial, Social, Wrapper } from './Header.styles'
import Logo from '../Logo/Logo'
import { iconList } from '../../globalStyles';
import { NavLink } from 'react-router-dom';

import { useAuthentication } from '../../hooks/useAuthentication';
import { useStateContext } from '../../context/ContextProvider';

export default function Header() {

  const [navButton, setNavButton] = useState(false);
  const { user } = useStateContext();
  const { logout } = useAuthentication()
  return (
    <Wrapper>
      <Flex>
        <LogoWrapper>
          <Logo letter />
        </LogoWrapper>
        <NavButton
          onClick={() => setNavButton(!navButton)}
          navbutton={navButton}
        />
        <Social href="#!">{iconList.mail}</Social>

        {/*OPEN HEADER */}
        <Nav navbutton={navButton}>
          <a href="/"
            onClick={() => setNavButton(!navButton)}>
            <Logo />
          </a>
          <ul>
            <li>
              <NavLink to="/" end
                onClick={() => setNavButton(!navButton)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about"
                onClick={() => setNavButton(!navButton)}>
                About
              </NavLink>
            </li>
            {/*USUÁRIO LOGADO*/}
            {user && (
              <>
                <li>
                  <NavLink to="/dashboard"
                    onClick={() => setNavButton(!navButton)}>
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <a href="#!" onClick={logout}>
                    Logout
                  </a>
                </li>
              </>
            )}
            {/*USUÁRIO NÃO LOGADO*/}
            {!user && (
              <>
                <li>
                  <NavLink to="/login"
                    onClick={() => setNavButton(!navButton)}>
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/register"
                    onClick={() => setNavButton(!navButton)}>
                    Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>
          <NavSocial>
            <ul>
              <li>
                <a href="#!">
                  {iconList.facebook}
                </a>
              </li>
              <li>
                <a href="#!">
                  {iconList.twitter}
                </a>
              </li>
              <li>
                <a href="#!">
                  {iconList.instagram}
                </a>
              </li>
              <li>
                <a href="#!">
                  {iconList.pinterest}
                </a>
              </li>
              <li>
                <a href="#!">
                  {iconList.reddit}
                </a>
              </li>
            </ul>
          </NavSocial>
        </Nav>
      </Flex>
    </Wrapper>
  )
}

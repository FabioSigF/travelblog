import React from 'react'
import { Flex, LogoWrapper, Nav, NavButton,  NavSocial, Social, Wrapper } from './Header.styles'
import Logo from '../Logo/Logo'
import { iconList } from '../../globalStyles';
import { NavLink } from 'react-router-dom';

import { useAuthentication } from '../../hooks/useAuthentication';
import { useStateContext } from '../../context/ContextProvider';
import Search from '../Search/Search';

export default function Header() {

  const {openMenu, setOpenMenu} = useStateContext();
  const { user } = useStateContext();
  const { logout } = useAuthentication();
  return (
    <Wrapper>
      <Flex>
        <LogoWrapper>
          <Logo letter />
        </LogoWrapper>
        <NavButton
          onClick={() => setOpenMenu(!openMenu)}
          navbutton={openMenu}
        />
        <Social href="#!">{iconList.mail}</Social>

        {/*OPEN HEADER */}
        <Nav navbutton={openMenu}>
          <a href="/"
            onClick={() => setOpenMenu(!openMenu)}>
            <Logo />
          </a>
          <ul>
            <li>
              <NavLink to="/" end
                onClick={() => setOpenMenu(!openMenu)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about"
                onClick={() => setOpenMenu(!openMenu)}>
                About
              </NavLink>
            </li>
            {/*USUÁRIO LOGADO*/}
            {user && (
              <>
                <li>
                  <NavLink to="/dashboard"
                    onClick={() => setOpenMenu(!openMenu)}>
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
                    onClick={() => setOpenMenu(!openMenu)}>
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/register"
                    onClick={() => setOpenMenu(!openMenu)}>
                    Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>
          <Search />
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

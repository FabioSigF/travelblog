import React, { useState } from 'react'
import { Flex, LogoWrapper, NavButton, Social, Wrapper } from './Header.styles'
import Logo from '../Logo/Logo'
import { iconList } from '../../globalStyles';

export default function Header() {
  const [navButton, setNavButton] = useState(false);

  return (
    <Wrapper>
      <Flex>
        <LogoWrapper>
          <Logo letter/>
        </LogoWrapper>
        <NavButton 
          onClick={() => setNavButton(!navButton)}
          navbutton={navButton}
        />
        <Social href="#!">{iconList.mail}</Social>
      </Flex>
    </Wrapper>
  )
}

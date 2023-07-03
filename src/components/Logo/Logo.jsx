import React from 'react'
import { LetterImg, LogoImg, Wrapper } from './Logo.styles'
import logo from '../../assets/imgs/logo.png';
import logoLetter from '../../assets/imgs/logo_letter.png';
export default function Logo({letter}) {
  return (
    <Wrapper href="/">
      {!letter && (
        <LogoImg src={logo} alt="Behold Travel Blog" />
      )}
      {letter && (
        <LetterImg src={logoLetter} alt="Behold Travel Blog" />
      )}
    </Wrapper>
  )
}

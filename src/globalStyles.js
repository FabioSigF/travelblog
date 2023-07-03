import { createGlobalStyle, styled } from "styled-components"

import { IoArrowDown, IoArrowForward, IoCart, IoMailOutline, IoSearchOutline } from 'react-icons/io5'
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaRedditAlien, FaPencilRuler, FaTrashAlt } from 'react-icons/fa'

export const colors = {
  body: "#fff",
  main: "#79A2AC",
  textLight: "#fff",
  textDark: "#1C2522",
  textGray: "#919A99",
  bgGray: "#fafafa",
  bgLight: "fff",
  bgDottedHorizontal: "repeating-linear-gradient(90deg,#919a99,#919a99 2px,transparent 2px,transparent 4px);",
  bgDottedVertical: "repeating-linear-gradient(180deg,#919a99,#919a99 2px,transparent 2px,transparent 4px);",
  bgDottedVerticalWhite: "repeating-linear-gradient(180deg,#fff,#fff 2px,transparent 2px,transparent 4px);",

}

export const iconList = {
  mail: <IoMailOutline />,
  facebook: <FaFacebookF />,
  twitter: <FaTwitter />,
  instagram: <FaInstagram />,
  pinterest: <FaPinterest />,
  reddit: <FaRedditAlien />,
  search: <IoSearchOutline />,
  pencil: <FaPencilRuler />,
  trash: <FaTrashAlt />,
  cart: <IoCart />,
  arrowDown: <IoArrowDown />,
  arrowForward: <IoArrowForward />,

}

export const fFamily = {
  text: "'Dosis', sans-serif",
  title: "'Playfair Display', serif",
  other: "'Montserrat', sans-serif",
}

export const fSize = {
  small: ".625rem",
  textSmaller: ".875rem",
  text: "1rem",
  textLarger: "1.2rem",
  title: "2rem",
  titleLarger: "2.5rem",
  largeSmaller: "3.5rem",
  large: "4.6875rem",
}

export const circleDotted = {
  svg: <svg style={{
    transform: "rotate(-10.8333deg)", position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    strokeLinecap: "round",
    strokeDasharray: "0.6px,4px",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2px",
    overflow: "visible",
  }}><circle cx="50%" cy="50%" r="46%"></circle></svg>
}

export const transition = {
  default: "all 200ms ease-in-out",
}

export const pseudoCfg = {
  content: "''",
  display: 'block',
  position: 'absolute',
}

export const deviceSize = {
  mobileS: '320px',
  mobileM: '425px',
  mobileL: '576px',
  tablet: '768px',
  laptopS: '992px',
  laptop: '1024px',
  laptopM: '1200px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const Container = styled.div`
    box-sizing: border-box;
    padding-left: 6%;
    padding-right: 6%;
    width: 100%;
    
    @media screen and (min-width: ${deviceSize.mobileL}) {
      padding-left: 0;
      padding-right: 0;
      max-width: 540px;
      margin: 0 auto;
    }
    @media screen and (min-width: ${deviceSize.tablet}) {
      max-width: 720px;
    }
    @media screen and (min-width: ${deviceSize.laptop}) {
      max-width: 960px;
    }
    @media screen and (min-width: ${deviceSize.laptopM}) {
      max-width: 1140px;
    }
    @media screen and (min-width: ${deviceSize.laptopL}) {
      max-width: 1320px;
    }
`

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${colors.body};
    font-family: ${fFamily.text};
    font-size: ${fSize.text};
  }

  p {
    font-family: ${fFamily.text};
    color: ${colors.textGray};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${colors.textDark};
    font-family: ${fFamily.title};
  }

  a,
  button {
    text-decoration: none;
    border: none;
    transition: ${transition.default};
    cursor: pointer;
    font-family: ${fFamily.other};
    background: none;
  }

  input {
    border: 1px solid #ddd;
    background-color: transparent;
    color: ${colors.main};
    font-family: ${fFamily.text};
    font-size: ${fSize.text};
    padding: .5rem 1rem;
  }
`
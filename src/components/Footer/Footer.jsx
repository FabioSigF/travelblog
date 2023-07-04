import React from 'react'
import { Content, Input, Social, Wrapper } from './Footer.styles'
import Logo from '../Logo/Logo'
import bgFooter from '../../assets/imgs/bgFooter.jpg'
import { iconList } from '../../globalStyles'
export default function Footer() {
  return (
    <Wrapper background={bgFooter}>
      <Content>
        <Logo />
        <span>Join Our Newsletter</span>
        <input type="text" placeholder='Your Email Address' />
        <p>This is Behold, a contemporary travel blog theme we designed so you can share your travel stories and experiences in a captivating manner & inspire your readers.</p>
        <Social>
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
        </Social>
      </Content>
    </Wrapper>
  )
}

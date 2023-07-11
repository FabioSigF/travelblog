import React from 'react'
import { Wrapper } from './ButtonMain.styles'
import { iconList } from '../../../globalStyles'

export default function ButtonMain({ children, onClick }) {
  return (
    <Wrapper
      onClick={onClick}
    ><span>{children}</span>{iconList.arrowForward}</Wrapper>
  )
}

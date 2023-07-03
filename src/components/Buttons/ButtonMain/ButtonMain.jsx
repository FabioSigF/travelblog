import React from 'react'
import { Wrapper } from './ButtonMain.styles'
import { iconList } from '../../../globalStyles'

export default function ButtonMain({ children }) {
  return (
    <Wrapper
    ><span>{children}</span>{iconList.arrowForward}</Wrapper>
  )
}

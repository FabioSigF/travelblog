import React from 'react'
import { Wrapper } from './Container.styles'

export default function Container({children}) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

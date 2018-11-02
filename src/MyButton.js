import React from 'react'
import styled, { css } from 'styled-components'

const MyButton = styled.button`
  background: transparent;
  border-radius: ${props => props.borderRadius || '3px'};
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  cursor: pointer;
  outline: none;
  
  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `
  }
`

const Container = styled.div`
  display: inline-block;
  margin: 10px;
  box-shadow: 3px 3px 3px #ccc;
`

export default function (props) {
  return (
    <Container>
      <MyButton {...props}></MyButton>
    </Container>
  )
}
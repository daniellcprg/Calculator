import React from 'react'
import styled from 'styled-components/native'

import Key from './Key'

const Keyboard = () => {
  return (
    <Styled.Container>
      <Styled.Row>
        <Key keyText="AC" flex="3" />
        <Key keyText="/" isOperator />
      </Styled.Row>
      <Styled.Row>
        <Key keyText="7" />
        <Key keyText="8" />
        <Key keyText="9" />
        <Key keyText="x" isOperator />
      </Styled.Row>
      <Styled.Row>
        <Key keyText="4" />
        <Key keyText="5" />
        <Key keyText="6" />
        <Key keyText="-" isOperator />
      </Styled.Row>
      <Styled.Row>
        <Key keyText="1" />
        <Key keyText="2" />
        <Key keyText="3" />
        <Key keyText="+" isOperator />
      </Styled.Row>
      <Styled.Row>
        <Key keyText="0" flex="2" />
        <Key keyText="." />
        <Key keyText="=" isOperator />
      </Styled.Row>
    </Styled.Container>
  )
}

const Styled = {
  Container: styled.View`
  flex: 1.5;
  `,

  Row: styled.View`
    flex: 1;
    flex-direction: row;
  `
}

export default Keyboard

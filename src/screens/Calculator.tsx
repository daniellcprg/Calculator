import React from "react";
import { TouchableOpacityProps } from 'react-native'
import styled from 'styled-components/native'

import MemoryContextProvider from "../contexts/memoryContext";

import Keyboard from "../components/Keyboard";
import Display from "../components/Display";

const Calculator = () => {
  return (
    <MemoryContextProvider>
      <Styled.Container>
        <Display />
        <Keyboard />
      </Styled.Container>
    </MemoryContextProvider>
  )
}

interface KeyType extends TouchableOpacityProps {
  flex?: string
  color?: string
}

const Styled = {
  Container: styled.View`
    flex: 1;
    background-color: white;
  `,

  Display: styled.View`
    flex: 1;
  `,

  Keyboard: styled.View`
    flex: 1.5;
  `,

  Row: styled.View`
    flex: 1;
    flex-direction: row;
  `,

  Key: styled.TouchableOpacity<KeyType>`
    flex: ${props => props.flex},
  `,

  KeyText: styled.Text``
}

export default Calculator
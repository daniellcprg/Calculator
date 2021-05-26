import React, { useContext } from 'react'
import { TextProps, TouchableOpacityProps } from 'react-native'
import styled from 'styled-components/native'

import { MemoryContext } from '../contexts/memoryContext'

interface KeyProps {
  keyText: string;
  flex?: string;
  isOperator?: boolean;
}

const Key: React.ElementType<KeyProps> = ({ isOperator = false, flex = '1', keyText }) => {
  const { doStuff } = useContext(MemoryContext)

  return (
    <Styled.Container 
      keyText={keyText}
      flex={flex} 
      isOperator={isOperator} 
      onPress={() => doStuff(keyText)}
    >
      <Styled.KeyText isOperator={isOperator}>
        {keyText}
      </Styled.KeyText>
    </Styled.Container>
  )
}

interface TextExtended extends TextProps {
  isOperator?: boolean
  keyText?: string;
}

interface TouchableOpacityExtended extends TouchableOpacityProps {
  flex?: string
  isOperator?: boolean
  keyText?: string
}

const Styled = {
  Container: styled.TouchableOpacity<TouchableOpacityExtended>`
    flex: ${props => props.flex};
    justify-content: center;
    align-items: center;
    background-color: ${props => props.isOperator ? '#f8922d' : '#dee1e1'};
  `,

  KeyText: styled.Text<TextExtended>`
    font-size: 32px;
    color: ${props => props.isOperator ? 'white' : '#1c2536'};
  `
}

export default Key

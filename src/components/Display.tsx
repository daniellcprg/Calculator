import React, { useContext } from 'react'
import styled from 'styled-components/native'
import { AutoSizeText, ResizeTextMode } from 'react-native-auto-size-text';

import { MemoryContext } from '../contexts/memoryContext';

const Display: React.ElementType = () => {
  const { memoryValue } = useContext(MemoryContext)

  return (
    <Styled.Container>
      <AutoSizeText
        style={{color: 'white'}}
        fontSize={64}
        numberOfLines={2}
        mode={ResizeTextMode.max_lines}
      >
        {memoryValue}
      </AutoSizeText>
    </Styled.Container>
  )
}

const Styled = {
  Container: styled.View`
    flex: 1;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 16px;
    background-color: #1c2536;
  `,
}

export default Display

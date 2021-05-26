import React, { createContext, useState } from "react";

import Memory from '../models/Memory'

const memory = new Memory();

interface IMemoryContext {
  doStuff: (command: string) => void
  memoryValue: string | undefined
}

export const MemoryContext = createContext<IMemoryContext>({} as IMemoryContext)

const MemoryContextProvider: React.FC = (props) => {
  const [memoryValue, setMemoryValue] = useState<string>("0")

  const doStuff = (command: string) => {
    memory.applyCommand(command)
    setMemoryValue(memory.value)
  }
  
  return (
    <MemoryContext.Provider value={{ doStuff, memoryValue }}>
      {props.children}
    </MemoryContext.Provider>
  )
}


export default MemoryContextProvider
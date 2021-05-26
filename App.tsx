import React from "react";
import { StatusBar } from "expo-status-bar";
    
import Calculator from "./src/screens/Calculator";

const App = () => {
  return (
    <>
      <Calculator />
      <StatusBar style="light" />
    </>
  )
}

export default App;

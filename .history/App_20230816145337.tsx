import React from 'react'
import { Main } from './src/view/Main'
import { StatusBar } from 'react-native'



export const App = () => {
  return (
    <>
    <StatusBar backgroundColor={"red"}></StatusBar>
      <Main></Main>

    </>)
}

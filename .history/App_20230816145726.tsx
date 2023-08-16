import React from 'react'
import { Main } from './src/view/Main'
import { StatusBar } from 'react-native'



export const App = () => {
  return (
    <>
    <StatusBar backgroundColor={"black"} barStyle={'dark-content'}></StatusBar>
      <Main></Main>

    </>)
}

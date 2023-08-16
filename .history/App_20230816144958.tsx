import React from 'react'
import { Main } from './src/view/Main'
import { SafeAreaView, StatusBar } from 'react-native'


export const App = () => {
  return (
    <>
    <StatusBar backgroundColor={"black"}></StatusBar>
      <SafeAreaView>

      <Main></Main>
      </SafeAreaView>

    </>)
}

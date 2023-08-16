import React from 'react'
import { Main } from './src/view/Main'
import { SafeAreaView, StatusBar } from 'react-native'
import { styles } from './src/theme/AppTheme'


export const App = () => {
  return (
    <>
    
    <StatusBar backgroundColor={"black"}></StatusBar>
      <Main></Main>

    </>)
}

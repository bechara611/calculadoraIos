import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'

export const Main = () => {
  return (
   <View style={styles.fondo}>
    <Text style={styles.resultado}>1,500.00</Text>
   </View>
  )
}


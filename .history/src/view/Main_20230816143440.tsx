import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Main = () => {
  return (
   <View style={styles.container}>
    <Text style={styles.textoBlanco}>Danyyyyyy3</Text>
   </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black'
    },
    textoBlanco:{
        color:'#fff',
        fontSize:30
    }
});

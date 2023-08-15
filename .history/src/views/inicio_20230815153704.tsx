import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Inicio = () => {
    return (
        <View style={styles.container}>
          <Text>Calculadora2</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        flex:1
    }
});

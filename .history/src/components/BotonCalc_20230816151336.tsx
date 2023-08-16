import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BotonCalc = () => {
    {/* {Boton} */}
    <View style={styles.boton}>
    <Text style={styles.botonTexto}>1</Text>
</View>
}


const styles = StyleSheet.create({
    boton:{
        height:80,
        width:80,
        backgroundColor:'#9b9b9b',
        borderRadius:100,
        justifyContent:'center',
    },
    botonTexto:{
        textAlign:'center',
        padding:10,
        fontSize:30,
        color:'black',
        fontWeight:'300'
    }
});
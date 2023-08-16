import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface botonCalcInterface{
    texto:String,
}
export const BotonCalc = ({texto}:botonCalcInterface) => {
 
    {/* {Boton} */ }
    return(<View style={
        styles.boton
    
    }>
        <Text style={styles.botonTexto}>{texto}</Text>
    </View>)
}


const styles = StyleSheet.create({
    boton: {
        height: 80,
        width: 80,
        backgroundColor: '#9b9b9b',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal:5,
    },
    botonTexto: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'black',
        fontWeight: '300',
    
    }
});
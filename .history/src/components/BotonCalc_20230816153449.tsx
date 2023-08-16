import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface botonCalcInterface{
    texto:string,
    color?:string,
    ancho?:boolean,
}
export const BotonCalc = ({texto,color='#2D2D2D',ancho=false}:botonCalcInterface) => {
  
    {/* {Boton} */ }
    return(
    <View style={
      {  ...styles.boton, backgroundColor:color}
    
    }>
        <Text style={
        { ...styles.botonTexto,
        color:color==='#9B9B9B' ? "black" : "white"
        }
            
            }>{texto}</Text>
    </View>)
}


const styles = StyleSheet.create({
    boton: {
        height: 80,
        width: 80,
        backgroundColor: '#9b9b9b',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal:4,
    },
    botonTexto: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '300',
    
    }
});
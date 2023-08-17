import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface botonCalcInterface{
    texto:string,
    color?:string,
    ancho?:boolean,
}
export const BotonCalc = ({texto,color='#2D2D2D',ancho=false}:botonCalcInterface) => {
  
    {/* {Boton} */ }
    


    return(
        <TouchableOpacity>

    <View style={
      {  ...styles.boton, backgroundColor:color,
        width:ancho ? 175: 80
    }
    
    }>
        <Text style={
        { ...styles.botonTexto,
        color:color==='#9B9B9B' ? "black" : "white"
        }
            
            }>{texto}</Text>
    </View>
    </TouchableOpacity>
    )
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
import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'
import { BotonCalc } from '../components/BotonCalc'

export const Main = () => {
    const [numero,setNumero]= useState('10');
    const limpiar=()=>{
        setNumero('0')
    }
    return (
        <View style={styles.fondo}>
            <View style={styles.calculadoraContainer}>
                <Text style={styles.resultadoPequeno}>3,500.00</Text>
                <Text style={styles.resultado}>{numero}</Text>

                {/* {FILA DE BOTONES} */}
                <View style={styles.fila}>
                    <BotonCalc texto={'C'} color={"#9B9B9B"} action={limpiar}></BotonCalc>
                    <BotonCalc texto={'+/-'} color={"#9B9B9B"}></BotonCalc>
                    <BotonCalc texto={'del'} color={"#9B9B9B"}></BotonCalc>
                    <BotonCalc texto={'/'} color={"#FF9427"}></BotonCalc>
                </View>
                {/* {FILA DE BOTONES} */}
                <View style={styles.fila}>
                    <BotonCalc texto={'7'} ></BotonCalc>
                    <BotonCalc texto={'8'} ></BotonCalc>
                    <BotonCalc texto={'9'} ></BotonCalc>
                    <BotonCalc texto={'x'} color={"#FF9427"}></BotonCalc>
                </View>
                {/* {FILA DE BOTONES} */}
                <View style={styles.fila}>
                    <BotonCalc texto={'4'} ></BotonCalc>
                    <BotonCalc texto={'5'} ></BotonCalc>
                    <BotonCalc texto={'6'} ></BotonCalc>
                    <BotonCalc texto={'-'} color={"#FF9427"}></BotonCalc>
                </View>
                {/* {FILA DE BOTONES} */}
                <View style={styles.fila}>
                    <BotonCalc texto={'1'} ></BotonCalc>
                    <BotonCalc texto={'2'} ></BotonCalc>
                    <BotonCalc texto={'3'} ></BotonCalc>
                    <BotonCalc texto={'+'} color={"#FF9427"}></BotonCalc>
                </View>

                {/* {FILA DE BOTONES} */}
                <View style={styles.fila}>
                    <BotonCalc texto={'0'} ancho={true} ></BotonCalc>
                    <BotonCalc texto={'.'} ></BotonCalc>
                    <BotonCalc texto={'='} color={"#FF9427"}></BotonCalc>
                </View>





            </View>
        </View>
    )
}

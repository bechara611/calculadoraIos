import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'
import { BotonCalc } from '../components/BotonCalc'

export const Main = () => {
    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setnumeroAnterior] = useState('0');
    const limpiar = () => {
        setNumero('0')
        setnumeroAnterior('0')
    }
    const armarNumero = (numeroTexto: string) => {
        setNumero(numero + numeroTexto)
    }
    return (
        <View style={styles.fondo}>
            <View style={styles.calculadoraContainer}>
                <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
                <Text style={styles.resultado}>{numero}</Text>

                {/* {FILA DE BOTONES} */}
                <View style={styles.fila}>
                    <BotonCalc texto={'C'} color={"#9B9B9B"} accion={limpiar}></BotonCalc>
                    <BotonCalc texto={'+/-'} color={"#9B9B9B"} ></BotonCalc>
                    <BotonCalc texto={'del'} color={"#9B9B9B"}></BotonCalc>
                    <BotonCalc texto={'/'} color={"#FF9427"}></BotonCalc>
                </View>
                {/* {FILA DE BOTONES} */}
                <View style={styles.fila}>
                    <BotonCalc texto={'7'} accion={armarNumero}></BotonCalc>
                    <BotonCalc texto={'8'} accion={armarNumero}></BotonCalc>
                    <BotonCalc texto={'9'} accion={armarNumero}></BotonCalc>
                    <BotonCalc texto={'x'} color={"#FF9427"}></BotonCalc>
                </View>
                {/* {FILA DE BOTONES} */}
                <View style={styles.fila}>
                    <BotonCalc texto={'4'} accion={armarNumero} ></BotonCalc>
                    <BotonCalc texto={'5'} accion={armarNumero} ></BotonCalc>
                    <BotonCalc texto={'6'} accion={armarNumero} ></BotonCalc>
                    <BotonCalc texto={'-'} color={"#FF9427"}></BotonCalc>
                </View>
                {/* {FILA DE BOTONES} */}
                <View style={styles.fila}>
                    <BotonCalc texto={'1'} accion={armarNumero} ></BotonCalc>
                    <BotonCalc texto={'2'} accion={armarNumero} ></BotonCalc>
                    <BotonCalc texto={'3'} accion={armarNumero} ></BotonCalc>
                    <BotonCalc texto={'+'} color={"#FF9427"}></BotonCalc>
                </View>

                {/* {FILA DE BOTONES} */}
                <View style={styles.fila}>
                    <BotonCalc texto={'0'} ancho={true}  accion={armarNumero}></BotonCalc>
                    <BotonCalc texto={'.'} accion={armarNumero} ></BotonCalc>
                    <BotonCalc texto={'='} color={"#FF9427"}></BotonCalc>
                </View>





            </View>
        </View>
    )
}


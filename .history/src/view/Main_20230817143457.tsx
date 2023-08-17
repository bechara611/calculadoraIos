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
        //verificar si ya existe un punto decimal
        if (numero.includes('.') && numeroTexto === '.') { return }

        if (numero.startsWith('0') || numero.startsWith('-0')) {


            //Si es un punto si lo permite
            if (numeroTexto === '.') {
                setNumero(numero + numeroTexto)
                //evaluar si es otro cero y hay un punto
            } else if (numeroTexto === '0' && numero.includes('.')) {
                    setNumero(numero+numeroTexto)
                //evaluar si es diferente de 0 y NO tiene un cero
                }else if(numeroTexto!='0' && !numero.includes('.')){
                    setNumero(numeroTexto)
                }
        } else {

            setNumero(numero + numeroTexto)
        }
    }
    const positivoNegativo = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''))
        } else {
            setNumero('-' + numero)
        }
    }
    return (
        <View style={styles.fondo}>
            <View style={styles.calculadoraContainer}>
                <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
                <Text
                    numberOfLines={1}
                    adjustsFontSizeToFit={true}
                    style={styles.resultado}>{numero}</Text>

                {/* {FILA DE BOTONES} */}
                <View style={styles.fila}>
                    <BotonCalc texto={'C'} color={"#9B9B9B"} accion={limpiar}></BotonCalc>
                    <BotonCalc texto={'+/-'} color={"#9B9B9B"} accion={positivoNegativo} ></BotonCalc>
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
                    <BotonCalc texto={'0'} ancho={true} accion={armarNumero}></BotonCalc>
                    <BotonCalc texto={'.'} accion={armarNumero} ></BotonCalc>
                    <BotonCalc texto={'='} color={"#FF9427"}></BotonCalc>
                </View>





            </View>
        </View>
    )
}


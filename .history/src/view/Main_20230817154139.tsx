import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'
import { BotonCalc } from '../components/BotonCalc'
import { useCalculadora } from '../hooks/useCalculadora'



export const Main = () => {
    const {numero,numeroAnterior,limpiar,armarNumero,positivoNegativo,btnDelete,btnDividir,btnMultiplicar,btnSumar,btnRestar,calcular} = useCalculadora();
    
    return (
        <View style={styles.fondo}>
            <View style={styles.calculadoraContainer}>
                {
                    numeroAnterior !== '0' && <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
                }

                <Text
                    numberOfLines={1}
                    adjustsFontSizeToFit={true}
                    style={styles.resultado}>{numero}</Text>

                {/* {FILA DE BOTONES} */}
                <View style={styles.fila}>
                    <BotonCalc texto={'C'} color={"#9B9B9B"} accion={limpiar}></BotonCalc>
                    <BotonCalc texto={'+/-'} color={"#9B9B9B"} accion={positivoNegativo} ></BotonCalc>
                    <BotonCalc texto={'del'} color={"#9B9B9B"} accion={btnDelete}></BotonCalc>
                    <BotonCalc texto={'/'} color={"#FF9427"} accion={btnDividir}></BotonCalc>
                </View>
                {/* {FILA DE BOTONES} */}
                <View style={styles.fila}>
                    <BotonCalc texto={'7'} accion={armarNumero}></BotonCalc>
                    <BotonCalc texto={'8'} accion={armarNumero}></BotonCalc>
                    <BotonCalc texto={'9'} accion={armarNumero}></BotonCalc>
                    <BotonCalc texto={'x'} color={"#FF9427"} accion={btnMultiplicar}></BotonCalc>
                </View>
                {/* {FILA DE BOTONES} */}
                <View style={styles.fila}>
                    <BotonCalc texto={'4'} accion={armarNumero} ></BotonCalc>
                    <BotonCalc texto={'5'} accion={armarNumero} ></BotonCalc>
                    <BotonCalc texto={'6'} accion={armarNumero} ></BotonCalc>
                    <BotonCalc texto={'-'} color={"#FF9427"} accion={btnRestar}></BotonCalc>
                </View>
                {/* {FILA DE BOTONES} */}
                <View style={styles.fila}>
                    <BotonCalc texto={'1'} accion={armarNumero} ></BotonCalc>
                    <BotonCalc texto={'2'} accion={armarNumero} ></BotonCalc>
                    <BotonCalc texto={'3'} accion={armarNumero} ></BotonCalc>
                    <BotonCalc texto={'+'} color={"#FF9427"} accion={btnSumar}></BotonCalc>
                </View>

                {/* {FILA DE BOTONES} */}
                <View style={styles.fila}>
                    <BotonCalc texto={'0'} ancho={true} accion={armarNumero}></BotonCalc>
                    <BotonCalc texto={'.'} accion={armarNumero} ></BotonCalc>
                    <BotonCalc texto={'='} color={"#FF9427"} accion={calcular}></BotonCalc>
                </View>





            </View>
        </View>
    )
}


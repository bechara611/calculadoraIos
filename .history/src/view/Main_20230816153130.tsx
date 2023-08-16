import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'
import { BotonCalc } from '../components/BotonCalc'

export const Main = () => {
    return (
        <View style={styles.fondo}>
            <View style={styles.calculadoraContainer}>
                <Text style={styles.resultadoPequeno}>1,500.00</Text>
                <Text style={styles.resultado}>1,500.00</Text>

                {/* {FILA DE BOTONES} */}
                <View style={styles.fila}>
                    <BotonCalc texto={'C'} color={"#9B9B9B"}></BotonCalc>
                    <BotonCalc texto={'+/-'} color={"#9B9B9B"}></BotonCalc>
                    <BotonCalc texto={'del'} color={"#9B9B9B"}></BotonCalc>
                    <BotonCalc texto={'/'} color={"#FF9427"}></BotonCalc>
                </View>
                  {/* {FILA DE BOTONES} */}
                  <View style={styles.fila}>
                    <BotonCalc texto={'C'} ></BotonCalc>
                    <BotonCalc texto={'+/-'} ></BotonCalc>
                    <BotonCalc texto={'del'} ></BotonCalc>
                    <BotonCalc texto={'/'} color={"#FF9427"}></BotonCalc>
                </View>
                   {/* {FILA DE BOTONES} */}
                   <View style={styles.fila}>
                    <BotonCalc texto={'C'} ></BotonCalc>
                    <BotonCalc texto={'+/-'} ></BotonCalc>
                    <BotonCalc texto={'del'} ></BotonCalc>
                    <BotonCalc texto={'/'} color={"#FF9427"}></BotonCalc>
                </View>
                   {/* {FILA DE BOTONES} */}
                   <View style={styles.fila}>
                    <BotonCalc texto={'C'} ></BotonCalc>
                    <BotonCalc texto={'+/-'} ></BotonCalc>
                    <BotonCalc texto={'del'} ></BotonCalc>
                    <BotonCalc texto={'/'} color={"#FF9427"}></BotonCalc>
                </View>




            </View>
        </View>
    )
}


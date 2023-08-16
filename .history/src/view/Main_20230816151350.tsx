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

                <View style={styles.fila}>
                 <BotonCalc></BotonCalc>
                </View>




            </View>
        </View>
    )
}


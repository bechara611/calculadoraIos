import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'

export const Main = () => {
    return (
        <View style={styles.fondo}>
            <View style={styles.calculadoraContainer}>
                <Text style={styles.resultadoPequeno}>1,500.00</Text>
                <Text style={styles.resultado}>1,500.00</Text>

                <View>
                    {/* {Boton} */}
                    <View>
                            <Text>1</Text>
                    </View>
                </View>




            </View>
        </View>
    )
}


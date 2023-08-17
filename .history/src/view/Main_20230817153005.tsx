import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'
import { BotonCalc } from '../components/BotonCalc'

enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const Main = () => {
    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setnumeroAnterior] = useState('0');

    const ultimaOperacion = useRef<Operadores>();
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
                setNumero(numero + numeroTexto)
                //evaluar si es diferente de 0 y NO tiene un cero
            } else if (numeroTexto !== '0' && !numero.includes('.')) {
                setNumero(numeroTexto)
                //evitar 000.0
            } else if (numeroTexto === '0' && !numero.includes('.')) {
                setNumero(numero)
            } else { setNumero(numero + numeroTexto) }
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
    const btnDelete = () => {
        if (numero.length === 1) {
            setNumero('0')
            return

        } if (numero.length === 2 && numero.includes('-')) {
            setNumero('0');
            return
        }
        else {
            const split = numero.slice(0, numero.length - 1)
            setNumero(split)
        }
    }
    const cambiarNumeroPorAnnterior = () => {
        if (numero.endsWith('.')) {
            setnumeroAnterior(numero.slice(0, numero.length - 1));

        } else {
            setnumeroAnterior(numero)
        }
        setNumero('0')
    }

    const btnDividir = () => {
        cambiarNumeroPorAnnterior();
        ultimaOperacion.current = Operadores.dividir;

    }
    const btnMultiplicar = () => {
        cambiarNumeroPorAnnterior();
        ultimaOperacion.current = Operadores.multiplicar;

    }
    const btnSumar = () => {
        cambiarNumeroPorAnnterior();
        ultimaOperacion.current = Operadores.sumar;

    }
    const btnRestar = () => {
        cambiarNumeroPorAnnterior();
        ultimaOperacion.current = Operadores.restar;

    }
    const calcular = () => {
        //transformando de string a number
        const num1 = Number(numero)
        const num2 = Number(numeroAnterior)

        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumero(`${num1 + num2}`);

                break;
            case Operadores.restar:
                setNumero(`${num2 - num1}`);
                break;
            case Operadores.multiplicar:
                setNumero(`${num1 * num2}`);
                break;
            case Operadores.dividir:
                setNumero(`${num2 / num1}`);
                break;
            default:
                break;
        }
        setnumeroAnterior('0')
    }
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


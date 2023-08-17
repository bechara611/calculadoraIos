import { useRef, useState } from "react";

enum Operadores {
    sumar, restar, multiplicar, dividir
}
export const useCalculadora = () => {
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
                if(num1==0 && num2==0){
                    return
                }
                if(num1==0 ){
                    return
                }
                setNumero(`${num2 / num1}`);
                break;
            default:
                break;
        }
        setnumeroAnterior('0')
    return {numero,numeroAnterior,limpiar,armarNumero,positivoNegativo,btnDelete,btnDividir,btnMultiplicar,btnSumar,btnRestar,calcular}
    }
}

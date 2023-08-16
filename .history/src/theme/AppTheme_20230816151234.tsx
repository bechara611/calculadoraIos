import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo:{
        backgroundColor:'black',
        flex:1,
        justifyContent:'flex-end'

    },
    calculadoraContainer:{
        paddingHorizontal:20,
        backgroundColor:"black",
        flex:1,
        justifyContent:'flex-end'
   },
    resultado:{
        color:'#fff',
        fontSize:60,
        textAlign:'right'
    },
    resultadoPequeno:{
        color:'rgba(255,255,255,.5)',
        fontSize:30,
        textAlign:'right'
    },
    fila:{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:18,
        paddingHorizontal:10,
    },
    boton:{
        height:80,
        width:80,
        backgroundColor:'#9b9b9b',
        borderRadius:100,
        justifyContent:'center',
    },
    botonTexto:{
        textAlign:'center',
        padding:10,
        fontSize:30,
        color:'black',
        fontWeight:'300'
    }
});
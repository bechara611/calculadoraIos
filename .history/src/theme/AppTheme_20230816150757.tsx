import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo:{
        backgroundColor:'black',
        flex:1,
        justifyContent:'flex-end'

    },
    calculadoraContainer:{
        paddingHorizontal:20,
        backgroundColor:"green",
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
    boton:{
        height:80,
        width:80,
        backgroundColor:'#333333',
        borderRadius:100,
        justifyContent:'center'
    }
});
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
        textAlign:'right',
        marginBottom:10
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
 
});
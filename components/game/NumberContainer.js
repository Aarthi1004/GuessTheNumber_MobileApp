import {View,Text,StyleSheet } from "react-native";


function NumberContainer({children}){
    return(
        <View style={styles.numberViewCont}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    numberViewCont:{
        margin:24,
        borderWidth:2,
        borderColor:"#ddb52f",
        padding:15,
        borderRadius:8,
        justifyContent:"center"



    },
    numberText:{
        textAlign:"center",
        fontSize:36,
        fontWeight:"bold",
        color:"#ddb52f"

    }

});


export default NumberContainer;
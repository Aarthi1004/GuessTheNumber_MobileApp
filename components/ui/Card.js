import { View,StyleSheet } from "react-native"
function Card({children}){
    return(

        <View style={styles.MainContainer}>{children}</View>

    )
}


const styles=StyleSheet.create({
     MainContainer:{
        
        marginTop:50,
        backgroundColor:"#3b021f",
        padding:16,
        elevation:4,
        marginHorizontal:20,
        borderRadius:6,
        shadowColor:"black",
        shadowOffset:{height:2,width:0},
        shadowRadius:6,
        shadowOpacity:0.25,
        alignItems:"center",
        justifyContent:"center"
        

    }
})
export default Card;
import { Text,StyleSheet,View } from "react-native"


function Title({children}){
    return(
        <View>
             <Text style={styles.textView}>{children}</Text>
        </View>
        
    )
}

const styles=StyleSheet.create({
    textView:{
       
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center",
        color:"white",
        borderWidth:2,
        borderColor:"white",
        padding:12,
        

    }
})

export default Title;
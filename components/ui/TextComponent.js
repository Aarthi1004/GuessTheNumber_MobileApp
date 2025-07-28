import {Text,StyleSheet} from "react-native"

function TextComponent({children}){

    return(
         <Text style={styles.textContainers}>{children}</Text>
    )

}


const styles=StyleSheet.create({
    textContainers:{
        color:"#ddb52f",
        fontSize:20
    },
})
export default TextComponent;
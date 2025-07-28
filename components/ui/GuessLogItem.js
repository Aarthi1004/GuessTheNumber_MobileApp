import {View,Text,StyleSheet} from "react-native"

function GuessLogItem({roundNo,roundVal}){
    return(
    <View style={styles.logItem}>
        <Text style={styles.textCont}>#{roundNo}</Text>
        <Text style={styles.textCont}>{roundVal}</Text>

    </View>

    )
}

const styles=StyleSheet.create({
    logItem:{
        borderWidth:1,
        borderRadius:40,
        padding:12,
        marginVertical:8,
        backgroundColor:"#ddb52f",
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%"
    },
    textCont:{
        color:"white"
    }



})


export default GuessLogItem;
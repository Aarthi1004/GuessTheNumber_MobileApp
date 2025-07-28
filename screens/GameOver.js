import { Text,View,StyleSheet ,Image} from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOver({userNumber,userRounds,gameOverfunc}){

    return(
        <View style={styles.rootEnd}>
           <Title>Game Over!</Title>
           <View style={styles.imagCont}>
              <Image style={styles.image} source={require("../assets/images/success.png")} />
           </View>

           <Text style={styles.mainText}>
            Your phone needed <Text style={styles.highlight}>{userRounds}</Text> rounds to
            Guess  <Text  style={styles.highlight}>{userNumber}</Text>
           </Text>

           <PrimaryButton onPressFunc={gameOverfunc}>Start new Game</PrimaryButton>
        </View>
    )

}

const styles=StyleSheet.create({

    rootEnd:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        padding:24
    },
    imagCont:{
        width:300,
        height:300,
        borderRadius:150,
        borderWidth:2,
        borderColor:"black",
        overflow:"hidden",
        margin:36,
        

    },

    image:{
        height:"100%",
        width:"100%",//these 2 refer to the wid and height of parent cont
    },

    highlight:{
        color:"#72063c",
        
    },
    mainText:{
        color:"white",
        fontSize:20,
        textAlign:"center",
        marginBottom:20
    }
})

export default GameOver;
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ImageBackground,SafeAreaView } from 'react-native';
import {LinearGradient} from "expo-linear-gradient"
import StartGameScreen from './screens/StartGameScreen';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOver';


export default function App() {

  const [userNumber,setUserNumber]=useState(null);
  const [userRounds,setUserRounds]=useState(0);
  const [gameOver,setGameover]=useState(false);




  const pickedNumberHandler=(pickedNumber)=>{
    setUserNumber(pickedNumber)
  }

  const gameOverFunc=()=>{
    setUserNumber(null);
    setUserRounds(0);
    setGameover(false);
   
  }
  
  const gameResult=(numberOfRounds)=>{
    setGameover(true);
     setUserRounds(numberOfRounds);

  }
  let screen=<StartGameScreen numberFunc={pickedNumberHandler} />

  if(userNumber){
    screen=<GameScreen children={userNumber} goscreen={gameResult}/>
  }

  if(gameOver){
    screen=<GameOver userNumber={userNumber} userRounds={userRounds} gameOverfunc={gameOverFunc}/>
  }
  return (
    
    <LinearGradient colors={["#4e0329","#ddb52f"]} style={styles.rootStyle}>
       <ImageBackground source={require("./assets/images/background.png")} resizeMode='cover' style={styles.rootStyle}
        imageStyle={styles.backgroundImage}
       
       >
        <SafeAreaView style={styles.rootStyle}>{screen}</SafeAreaView> 

        </ImageBackground>

    </LinearGradient>
  
  );
}

const styles = StyleSheet.create({
   rootStyle:{
    flex:1,
   
   },
   backgroundImage:{
    opacity:0.15
   }

 
});

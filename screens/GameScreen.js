import { Text,View,StyleSheet,Alert, FlatList } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton"
import TextComponent from "../components/ui/TextComponent";
import Card from "../components/ui/Card";
import {Ionicons} from "@expo/vector-icons"
import GuessLogItem from "../components/ui/GuessLogItem";

let minNumber=1;
let maxNumber=100;

function GameScreen({children,goscreen}){

    const GuessNumber=(min,max,exclude)=>{
        const numberGen=Math.floor(Math.random()*(max-min))+min;
        if(numberGen==exclude){
            GuessNumber(min,max,exclude);
        }
        else{
            return numberGen;
        }
    };

    const initialGuess=GuessNumber(1,100,children);

    const [GuessedNumber,setGuessedNumber]=useState(initialGuess);

    const [arrlogs,setArrlogs]=useState([GuessedNumber]);


    useEffect(()=>{

        minNumber=1;
        maxNumber=100;
    },[])

    useEffect(()=>{

        if(GuessedNumber==children){
            goscreen(arrlogs.length);
            return;
        }
    },[GuessedNumber]);


    
    const nextNumberGuess=(value,userip)=>{
           if((value=="greater" && userip<GuessedNumber) || (value=="lower" && userip>GuessedNumber)){
           
            Alert.alert("Dont lie!","You Know this is wromg!",[{
                text:"Sorry!",style:"cancel"
            }]);
             return;
           }
           else if(value=="greater"){
             minNumber=GuessedNumber+1;
            
           }
           else{
              maxNumber=GuessedNumber;
           }


           let newNumber=GuessNumber(minNumber,maxNumber,GuessedNumber);
           setGuessedNumber(newNumber);
           setArrlogs(prevValue=>[newNumber,...prevValue]);
        
           
    }

    const arrLength=arrlogs.length;
    return(
        <View style={styles.screen}>
          
            <View>
               <Title >
                Opponent's Guess
                </Title>
            </View>

            <NumberContainer>{GuessedNumber}</NumberContainer>
           
            <Card>
            

                
            <TextComponent>Higher or Lower?</TextComponent>
            <View style={styles.btnCont}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPressFunc={()=>{nextNumberGuess("greater",children)}}>
                        <Ionicons name="add" size={24} color="white"/>
                    </PrimaryButton>
                </View>

                <View style={styles.buttonContainer}>
                    
                  <PrimaryButton onPressFunc={()=>{nextNumberGuess("lower",children)}}>
                        <Ionicons name="remove" size={24} color="white"/>

                  </PrimaryButton>
                </View>
                
            </View>
               </Card>

          <FlatList
            data={arrlogs}
            renderItem={(itemData)=>{
                return(
                   <GuessLogItem  roundNo={arrLength-itemData.index} roundVal={itemData.item} />
                )
            }}
          
          
          
          />
            </View>
            
          
            
           
           

    
    )

}


const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding:60,
       
    },

    cardCont:{
        flex:1
    },

    btnCont:{
       
        flexDirection:"row",
        alignItems:"center"
    },
     buttonContainer:{
      
        flex:1,
      
    },
})

export default GameScreen;
import {View,StyleSheet, TextInput,Alert,Text } from "react-native"
import PrimaryButton from "../components/ui/PrimaryButton"
import { useState } from "react";
import Card from "../components/ui/Card";
import Title from "../components/ui/Title";
import TextComponent from "../components/ui/TextComponent";

function StartGameScreen({numberFunc}){

    const [enteredNumber,setEnteredNumber]=useState("");

    const handleReset=()=>{
        setEnteredNumber("");
    }

    const confirmInputHandler=()=>{
        const number=parseInt(enteredNumber);
        if(isNaN(number) || number<=0 || number>=100){

            Alert.alert(

                "Invalid Number",
                "Number has to be between 1 and 99",
                [{text:"OKAY",style:"destructive",onPress:handleReset}]
            );
           
        }
        else{
        {numberFunc(number)}


        }
       
    }
    return(
        <View style={styles.rootContainers}>
            <Title>Guess the number</Title>
        <Card>
            <TextComponent>Enter the number</TextComponent>
            <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" value={enteredNumber}
              onChangeText={setEnteredNumber}
            >
            </TextInput>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPressFunc={handleReset}>Reset</PrimaryButton> 
                </View>

                <View style={styles.buttonContainer}>
                    <PrimaryButton onPressFunc={confirmInputHandler} >Confirm</PrimaryButton>
                </View>
                
              
            </View>
        
    </Card>
    </View>
    )

}

const styles=StyleSheet.create({

    rootContainers:{
        flex:1,
        marginTop:100,
        alignItems:"center"
    },

    
  

    numberInput:{
        height:60,
        width:50,
        textAlign:"center",
        marginVertical:10,
        fontSize:32,
        fontWeight:"bold",
        borderBottomWidth:2,
        color:"#ddb52f",
        borderBottomColor:"#ddb52f"

    },

    buttonsContainer:{
      
        flexDirection:"row",
      
    },
    buttonContainer:{
        flex:1,
      
    }



})

export default StartGameScreen;
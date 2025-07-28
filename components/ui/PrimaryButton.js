import { View,Text,Pressable,StyleSheet } from "react-native";


function PrimaryButton({children,onPressFunc}){
    return(

         <View style={styles.buttonOuterContainer}>

        <Pressable style={({pressed})=> pressed ? [styles.isPressed,styles.buttonInnerContainer]:styles.buttonInnerContainer} android_ripple={{color:"white"}}
         onPress={onPressFunc}    
            
        >
          
            <Text style={styles.buttonText} >{children}</Text>
           

        </Pressable>
        </View>
       
    )

}


const styles=StyleSheet.create({
    buttonOuterContainer:{
        
       margin:5,
       overflow:'hidden',
       borderRadius:28,
       borderWidth:2,
      
      
        
      
    },

    buttonInnerContainer:{
        backgroundColor:"#72063c",
        paddingVertical:10 ,
      
        
        
    },

    buttonText:{
        textAlign:"center",
        color:"white",
        padding:5
        
    },

    isPressed:{
        opacity:0.75
    }
})


export default PrimaryButton;
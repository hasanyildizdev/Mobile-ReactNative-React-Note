import React from "react";
import{
    Text,
    StyleSheet,
    Pressable,
    View,
} from 'react-native';

export default CustomButton=(props)=>{
    return(
        <Pressable 
          onPress={props.onPressFunction}
          //style={({pressed})=>({backgroundColor: pressed ?'#ddd':'#0f0'})}
          style={[styles.button,
            {backgroundColor:props.color,
             width:props.width,
             height:props.height}]}
          android_ripple={{color:'#fff'}}
         >
            <Text style={[styles.text,{color:props.textColor}]}>{props.title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button:{
        margin:10,
        padding:13,
        borderColor:'#ca5',
        borderRadius:15,
        justifyContent: 'center',
        alignItems:'center',
        shadowColor:'#000',
        elevation: 10,
    },
    text:{
        fontSize: 24,
    }
})
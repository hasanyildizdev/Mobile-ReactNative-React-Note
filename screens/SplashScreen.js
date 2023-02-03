import react, { useEffect } from "react";
import {Animated} from 'react-native';
import {
    Text,
    View,
    StyleSheet,
    Image,
} from "react-native";
import 'react-native-gesture-handler';
import PushNotification from "react-native-push-notification";
import GlobalStyle from "../utils/GlobalStyle";

export default function SplashScreen({navigation}){

   useEffect(()=>{
      createChannels();
      this.startAnimation();
       finishSplash();
    },[]); 
 
    function finishSplash(){
        setTimeout(() => {
            navigation.navigate('App');
        }, 1000);
    }

    state = {
        animation: new Animated.Value(0),
      };

      startAnimation = () => {
        Animated.timing(this.state.animation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }).start(() => {
          this.state.animation.setValue(0);
        });
      };
    
        const xInterpolate = this.state.animation.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "360deg"],
        });
    
        const yInterpolate = this.state.animation.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: ["0deg", "0deg", "180deg"],
        });
    
        const animatedStyles = {
          transform: [{ rotateX: xInterpolate }, { rotateY: yInterpolate }],
        };

        const createChannels=()=>{
          PushNotification.createChannel({
            channelId:"task-channel",
            channelName:"Task Channel",
            playSound: true,
            soundName: "default",
          })
        }

    return(

     <View style={styles.body}>
            <Text style={[styles.text,GlobalStyle.CustomFontBig]}>Wellcome to Read & Note</Text>
            <Animated.View style={animatedStyles}>
                <Image
                        style={styles.image}
                        source={require('../assets/butterfly2.png')}
                    />
            </Animated.View>
            <Text style={styles.creater}>@created by Hasan YILDIZ</Text>
        </View> 
    )
}

const styles=StyleSheet.create({
    body:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'space-between',
    },
    text:{
        marginTop:100,
        margin:20,
        fontSize:40,
        color:'#f14',
    },
    image:{
        width:250,
        height:250,
        resizeMode:'contain',
        padding:5,
        margin:5,
    },
    creater:{
        color:'#000'
    },
})
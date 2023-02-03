import react from "react";
import {
    Text,
    View,
    StyleSheet,
    Image,
} from "react-native";

export default function TopBar(props){
    return(
        <View style={styles.body}>
            <View style={styles.imageFrame}>
                <Image
                    style={styles.image}
                    source={require('../assets/butterfly2.png')}
                />
            </View>
            <Text style={styles.text}>{props.title}</Text>
            <Image
                    style={styles.image}
                    source={require('../assets/butterfly2.png')}
                />
        </View>
    )
}

const styles=StyleSheet.create({
    body:{
        flexDirection: 'row',
        width:'100%',
        height:50,
        backgroundColor:'#694fad',
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        flex:1,
        fontSize:30,
        color:'#fff',
        textAlign:'center',
        fontFamily:'Moul-Regular',
    },
    imageFrame:{
        width:50,
        height: 50,
        alignItems: 'center',
        justifyContent:'center',
        padding:5,
        margin:5,
    },
    image: {
        width:50,
        height:50,
        resizeMode:'contain',
        padding:5,
        margin:5,
    },
})
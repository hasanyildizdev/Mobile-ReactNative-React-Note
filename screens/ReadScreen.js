import react from "react";
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
    Dimensions,
} from "react-native";
import TopBar from "../utils/TopBar";
import Pdf from 'react-native-pdf';

export default function ReadScreen(){

    return(
        <View style={styles.body}>
            <StatusBar backgroundColor="#694fad"/>
            <TopBar title="READ & NOTE"/>
            <View style={styles.container}>
                <Pdf
                    trustAllCerts={false}
                    source={require('../assets/pdf/bakers-dozen-obooko.pdf')}
                    onLoadComplete={(numberOfPages,filePath) => {
                        console.log(`Number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages) => {
                        console.log(`Current page: ${page}`);
                    }}
                    onError={(error) => {
                        console.log(error);
                    }}
                    style={styles.pdf}/>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    body:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
    },
    text:{
        fontSize:30,
        color:'#f14'
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
})
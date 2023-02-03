import React from "react";
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
    FlatList,
    SafeAreaView,
} from "react-native";
import TopBar from "../utils/TopBar";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Switch } from 'react-native-switch';
import ToggleSwitch from 'toggle-switch-react-native'
import Pdf from 'react-native-pdf';


const settingsList=[
    {id:'1',title:'FONT SETTINGS',iconName:'font',switch:false},
    {id:'2',title:'NOTIFICATIONS',iconName:'comment-dots',switch:true},
    {id:'4',title:'DARK MODE',iconName:'adjust',switch:true},
    {id:'3',title:'LANGUAGE',iconName:'language',switch:false},
    {id:'5',title:'HELP',iconName:'hands-helping',switch:false},
    {id:'6',title:'PRIVACY POLICY',iconName:'user-secret',switch:false},
    {id:'7',title:'ABOUT',iconName:'info',switch:false},
];


export default function SettingsScreen(){
    
    return(

            <SafeAreaView style={styles.body}>
                <StatusBar backgroundColor="#694fad"/>
                <TopBar title="SETTINGS"/>
                <FlatList
                    data={settingsList}
                    renderItem={({item})=>(
                        <View style={styles.item}>
                            <View style={styles.icons}>
                                <FontAwesome5
                                    name={item.iconName}
                                    size={25}
                                    color={'#ffffff'}
                                />
                            </View>
                          <Text style={styles.text}>{item.title}</Text>

                          <View style={styles.switch}>
                                {item.switch ? 
                                <ToggleSwitch
                                isOn={false}
                                onColor="green"
                                offColor="red"
                                circleSize={30}
                                barHeight={30}
                                circleBorderWidth={3}
                                circleActiveColor={'#ffffff'}
                                circleInActiveColor={'#000000'}  
                                onChange={() => setShow(false)}                                
                                />
                                : null}
                          </View>
                        </View>
                      )}
                    keyExtractor={item=>item.id}
                />
            </SafeAreaView>
    
    )
}

const styles=StyleSheet.create({
    body:{
        flex:1,
        backgroundColor:'#fff',
    },
    icons:{
        width:50,
        height:50,
        borderRadius:25,
        borderWidth:2,
        borderColor:'#ffffff',
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        flex:1,
        fontSize:24,
        color:'#ffffff',
        marginLeft:20,
        fontWeight:'bold',
    },
    item:{
        flexDirection:'row',
        backgroundColor:'#694fad',
        padding:20,
        marginVertical:8,
        marginHorizontal:18,
        alignItems:'center',
        borderRadius:20,
    },
    switch:{
        alignItems:'center',
        justifyContent:'flex-end',
    },
})
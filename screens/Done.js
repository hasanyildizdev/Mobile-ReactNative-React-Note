import React from "react";
import { 
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Alert} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useDispatch,useSelector} from 'react-redux';
import {setTasks,setTasksID} from '../src/redux/actions';
import { FlatList } from "react-native-gesture-handler";
import GlobalStyle from "../utils/GlobalStyle";
import CheckBox from "@react-native-community/checkbox";

export default function Done({navigation}){

        const {tasks}=useSelector(state=>state.taskReducer);
        const dispatch = useDispatch();

        const deleteTask=(id)=>{
            const filteredTasks=tasks.filter(task=>task.ID!==id);
            AsyncStorage.setItem('Tasks',JSON.stringify(filteredTasks))
            .then(()=>{
                dispatch(setTasks(filteredTasks));
                Alert.alert('Success!','Task removed successfully.');
            })
            .catch(err=>console.log(err))
        }

    const checkTask=(id,newValue)=>{
        const index=tasks.findIndex(task=>task.ID===id);
        if(index>-1){
            let newTasks=[...tasks];
            newTasks[index].Done=newValue;
            AsyncStorage.setItem('Tasks',JSON.stringify(newTasks))
            .then(()=>{
                dispatch(setTasks(newTasks));
                Alert.alert('Success!','Task state is changed.');
            })
            .catch(err=>console.log(err))
        }
    }

    return(
        <View style={styles.body}>
            <FlatList
                data={tasks.filter(task=>task.Done===true)}
                renderItem={({item})=>(
                    <TouchableOpacity
                        style={styles.item}
                        onPress={()=>{
                            dispatch(setTasksID(item.ID));
                            navigation.navigate('Task');
                        }}
                    >
                        <View style={styles.item_row}>
                            <CheckBox
                                value={item.Done}
                                onValueChange={(newValue)=>checkTask(item.ID,newValue)}
                            />
                            <View style={styles.item_body}>
                                <Text 
                                    style={[GlobalStyle.CustomFontBig,styles.title]}
                                    numberOfLines={1}
                                    >
                                    {item.Title}
                                </Text>
                                <Text 
                                    style={[GlobalStyle.CustomFontHW,styles.desc]}
                                    numberOfLines={1}
                                    >
                                    {item.Desc}
                                </Text>
                            </View>
                            <TouchableOpacity
                                style={styles.delete}
                                onPress={()=>{ deleteTask(item.ID) }}
                            >
                                <FontAwesome5
                                    name={'trash'}
                                    size={25}
                                    color='#ff3636'
                                />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item,index)=>index.toString()}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    body:{
        flex:1,
        backgroundColor:'#ffffff',
    },
    item:{
        marginHorizontal:10,
        marginVertical:7,
        paddingHorizontal:10,
        backgroundColor:'#fff',
        justifyContent:'center',
        borderRadius:10,
        elevation:5,
        borderWidth:3,
        borderColor:'#000000',
    },
    title:{
        fontSize:30,
        color:'#000',
        margin:5,
    },
    desc:{
        fontSize:20,
        color:'#999',
        margin:5,
    },
    item_row:{
        flexDirection:'row',
        alignItems:'center',
    },
    item_body:{
        flex:1,
    },
    delete:{
        width:50,
        height:50,
        justifyContent:'center',
        alignItems:'center',
    },
})
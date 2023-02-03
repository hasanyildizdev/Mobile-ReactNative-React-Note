import React from "react";
import { RNCamera, FaceDetector } from 'react-native-camera';
import { useCamera } from "react-native-camera-hooks";
import RNFS from 'react-native-fs'
import CustomButton from "../utils/CustomButton";
import {
    View,
    StyleSheet,
    Alert,
} from 'react-native';
import {setTasks} from '../src/redux/actions';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useDispatch,useSelector} from 'react-redux';

export default function Camera({navigation,route}){
    const[{cameraRef},{takePicture}]=useCamera(null);
    const {tasks}=useSelector(state=>state.taskReducer);
    const dispatch = useDispatch();

    const captureHandle= async()=>{
        try {
            const data=await takePicture();
            const filePath=data.uri;
            updateTask(route.params.id,filePath);

/*             console.log(data.uri);
            const newFilePath=RNFS.ExternalCachesDirectoryPath + '/MyTest.jpg';
            RNFS.moveFile(filePath,newFilePath)
            .then(()=>{console.log('Image Moved ',filePath,'-- to --',newFilePath);})
            .catch(error=>{ console.log(error);}) */
        } catch (error) { console.log(error);} 
    }

    const  updateTask=(id,path)=>{
        const index=tasks.findIndex(task=>task.ID===id);
        if(index>-1){
            let newTasks=[...tasks];
            newTasks[index].Image=path;
            AsyncStorage.setItem('Tasks',JSON.stringify(newTasks))
            .then(()=>{
                dispatch(setTasks(newTasks));
                Alert.alert('Success!','Task image is saved.');
                navigation.goBack();
            })
            .catch(err=>console.log(err))
        }
    }

    return(
        <View style={styles.body}> 
             <RNCamera
                ref={cameraRef}
                type={RNCamera.Constants.Type.back}
                style={styles.priview}>
                <CustomButton
                    title="Capture"
                    color='#694fad'
                    textColor='#ffffff'
                    onPressFunction={()=>captureHandle()}
                />
            </RNCamera> 
        </View>
    )
}


const styles = StyleSheet.create({
    body:{
        flex:1,
    },
    priview:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-end',
    }
})
import React, { useEffect } from 'react';

import SettingsScreen from './screens/SettingsScreen';
import NotesScreen from './screens/NotesScreen';
import ReadScreen from './screens/ReadScreen';
import SplashScreen from './screens/SplashScreen';
import Note from './screens/Note';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Provider } from 'react-redux';
import {Store} from './src/redux/store';
import Camera from './screens/Camera';

const rootStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();


export default function rootNavigation(){
  return(
    <Provider store={Store}>
        <NavigationContainer>
            <rootStack.Navigator
              initialRouteName="Splash"
              screenOptions={{ headerTitleAlign:'center',headerStyle:{backgroundColor:'#694fad'}}}>
                <rootStack.Screen  
                  name='Splash' 
                  component={SplashScreen} 
                  options={{headerShown:false,}}/>
                <rootStack.Screen  
                  name='App' 
                  component={App}
                  options={{headerShown:false,}}/>
                <rootStack.Screen  
                  name='Note' 
                  component={Note}/>
                <rootStack.Screen  
                  name='Camera' 
                  component={Camera}/>
            </rootStack.Navigator>
        </NavigationContainer>
      </Provider>
  )
}

function App(){
  return (
        <Tab.Navigator
          initialRouteName="Read"
          barStyle={{backgroundColor:'#694fad'}}
          screenOptions={({route})=>({
            tabBarIcon:({focused,size,color})=>{
              let iconName;
              if(route.name ==='Notes'){
                iconName='clipboard-check';
                size=focused ? 25:20;
                color= focused ? '#f14':'#555';
              }else if(route.name ==='Settings'){
                iconName='wrench';
                size=focused ? 25:20;
                color= focused ? '#f14':'#555';
              }else if(route.name ==='Read'){
                iconName='book';
                size=focused ? 25:20;
                color= focused ? '#f14':'#555';
              }
              return(
                <FontAwesome5
                  name={iconName}
                  size={size}
                  color={color}
                />
              )
            }
          })}
        >

          <Tab.Screen 
            name="Notes"
            component={NotesScreen}
            />

          <Tab.Screen 
            name="Read" 
            component={ReadScreen} />

          <Tab.Screen 
            name="Settings" 
            component={SettingsScreen} />

        </Tab.Navigator>
  )
}
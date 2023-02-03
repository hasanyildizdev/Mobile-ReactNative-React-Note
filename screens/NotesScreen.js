import react from "react";
import {
    Text,
    View,
    StyleSheet,
} from "react-native";
import TopBar from "../utils/TopBar"; 
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ToDo from "./ToDoScreen";
import Done from "./Done";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TabBarItem } from "react-native-tab-view";

const Tab = createMaterialTopTabNavigator();

export default function NotesScreen(){

    return(

/*         <View style={styles.body}>
            <StatusBar backgroundColor="#694fad"/>
            <TopBar title="HOME"/>
        </View> */
          <Tab.Navigator
                screenOptions={
                ({route})=>({                 
                  tabBarLabelStyle: { fontSize: 14,color:'#ffffff',fontWeight:'bold' },
                  tabBarStyle: { backgroundColor: '#694fad' },
            
                  tabBarIcon:({focused,size,color})=>{
                    let iconName;
                    if(route.name ==='To-Do'){
                      iconName='clipboard-list';//fontawesome.com
                      size=focused ? 25:20;
                      color= focused ? '#f14':'#555';
                    }else if(route.name ==='Done'){
                      iconName='clipboard-check';
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
/*                 tabBarOptions={{
                  labelStyle:{fontSize:15,fontWeight:'bold'}
                }} */
                >
    
              <Tab.Screen 
                  name="To-Do"
                  component={ToDo}/>
                <Tab.Screen 
                  name="Done"
                  component={Done} />
            </Tab.Navigator>
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
        color:'#f14',
    },
})
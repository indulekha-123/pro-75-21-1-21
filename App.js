import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ReadStoryScreen from './Screens/ReadStoryScreen';
import WriteStoryScreen from './Screens/WriteStoryScreen';


export default function App() {
  return (
   <View>
      <AppContainer /> 
    </View>
  );
}


const TabNavigator=createBottomTabNavigator({
 ReadStory:{screen:ReadStoryScreen},
WriteStory:{screen:WriteStoryScreen}
},
{defaultNavigationOptions:({navigation})=>({
  tabBarIcon:()=>{
    const routeName =navigation.state.routeName;

    if(routeName==="ReadStory"){
      return(
<Image
 source={require("./assets/read.png")}
 style={{width:40,height:40}}
/>

      )
    }
else if (routeName==="WriteStory"){
 return(
   <Image
   source={require("./assets/write.png")}
 style={{width:40,height:40}}
   
   />
 )
}
  }
})}
)

const switchNavigator=createSwitchNavigator({
  ReadStory:{screen:ReadStoryScreen},
WriteStory:{screen:WriteStoryScreen}
})

const AppContainer=createAppContainer(switchNavigator);




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

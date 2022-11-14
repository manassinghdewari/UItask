import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './src/screens/Homepage';
import Explore from './src/screens/components/Explore';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="Explore" component={Explore}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

const styles =StyleSheet.create({
  touchableOpacity:{
    position:"absolute",
    width:50,
    height:50,
    alignItems:"center",
    justifyContent:" center",
    right:30,
    bottom:30,
  },
  floatingButton:{
    resizeMode:'contain',
    width:50,
    height:50,
  }
})
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './Login';
import Signup from './Signup';


const Tab = createBottomTabNavigator();

export default function Index() {
  return (

    <NavigationContainer>
    <Tab.Navigator initialRouteName='Bottom Tab'>

      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Signup" component={Signup} />

    </Tab.Navigator>

    </NavigationContainer>
);
}

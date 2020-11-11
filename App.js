import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeDrawerNavigator from './src/navigator/HomeDrawerNavigator';


const Stack = createStackNavigator()

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerTitle: false,
        headerBackTitleVisible: false,
        headerShown: false
      }}
    >
        <Stack.Screen 
          name='Home' 
          component={HomeDrawerNavigator} 
          options={{ 
            headerShown: false 
          }}
        />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App
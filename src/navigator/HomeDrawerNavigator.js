import * as React from 'react';
import { Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MovieScreen from '../screen/MovieScreen'
import TVShowScreen from '../screen/TVShowScreen'

import { black, white, orange } from "../helper/Color";

const Drawer = createDrawerNavigator();

const HomeDrawerNavigator = () => {
  return (
      <Drawer.Navigator 
        initialRouteName="Movies"
        drawerType={"slide"}
        drawerStyle={{ width: "50%", backgroundColor: black }}
        drawerContentOptions={{
          activeBackgroundColor: "transparent",
          activeTintColor: orange,
          inactiveTintColor: white,
        }}
      >
        <Drawer.Screen 
          name="Movies" 
          component={MovieScreen} 
          options={{
            drawerLabel: ({ color, focused }) => CustomDrawerStyle(color, focused, "Movies"),
          }}
        />
        <Drawer.Screen 
          name="TV Show" 
          component={TVShowScreen} 
          options={{
            drawerLabel: ({ color, focused }) => CustomDrawerStyle(color, focused, "TV Shows"),
          }}
        />
      </Drawer.Navigator>
  );
}

const CustomDrawerStyle = (color, focused, title) => {
  return (
    <Text
      style={{
        fontSize: focused ? 20 : 16,
        fontWeight: null,
        color: color,
      }}
    >
      {title}
    </Text>
  );
};

export default HomeDrawerNavigator
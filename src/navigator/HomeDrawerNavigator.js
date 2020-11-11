import * as React from 'react';
import { Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MovieScreen from '../screen/MovieScreen'
import TVShowScreen from '../screen/TVShowScreen'

const Drawer = createDrawerNavigator();

const HomeDrawerNavigator = () => {
  return (
      <Drawer.Navigator 
        initialRouteName="Movies"
        drawerType={"slide"}
      >
        <Drawer.Screen 
          name="Movies" 
          component={MovieScreen} 
        />
        <Drawer.Screen 
          name="TV Show" 
          component={TVShowScreen} />
      </Drawer.Navigator>
  );
}

export default HomeDrawerNavigator
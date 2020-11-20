import React from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';

// Screens
import MoviesScreen from './src/screens/MoviesScreen'
import MovieDetailsScreen from './src/screens/MovieDetailsScreen'

const style = StyleSheet.create({
  appContainer: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  }
})

const App = () => {
  return (
  	<ScrollView style={style.appContainer}>
        <StatusBar backgroundColor="#333"  />
        <MovieDetailsScreen />
    </ScrollView>
  );
}

export default App
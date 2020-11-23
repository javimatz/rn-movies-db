import React from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';

// Screens
import Movies from './src/pages/MoviesHome'
import MovieDetail from './src/pages/MovieDetail'

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
        <Movies />
    </ScrollView>
  );
}

export default App
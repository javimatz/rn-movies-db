import React from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';

// Screens
import MoviesHome from './src/pages/MoviesHome'
import MovieDetail from './src/pages/MovieDetail'
import Movies from './src/pages/Movies'
import MoviesSearch from './src/pages/MoviesSearch'

const style = StyleSheet.create({
  appContainer: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  }
})

const App = () => {
  return (
  	<View style={style.appContainer}>
        <StatusBar backgroundColor="#333"  />
        <MoviesHome />
    </View>
  );
}

export default App
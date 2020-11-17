import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import MovieDetailsScreen from './src/screens/MovieDetailsScreen'
import MoviesScreen from './src/screens/MoviesScreen'

const App = () => {
  return (
    <MovieDetailsScreen />
  );
}

export default App
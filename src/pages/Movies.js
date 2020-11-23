import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import MoviesHeader from '../components/MoviesHeader';
import MovieCardList from '../components/MovieCardList';

const style = StyleSheet.create({
  
})

const Movies = () => {
  return (
  	<View>
        <MoviesHeader />
        <MovieCardList />
    </View>
  );
}

export default Movies
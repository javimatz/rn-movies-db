import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import MoviesHeader from '../components/Movies/MoviesHeader';
import MovieCardList from '../components/Movies/MovieCardList';

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
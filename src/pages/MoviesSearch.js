import React from 'react';
import { StyleSheet, View } from 'react-native';

import PageHeader from '../components/common/PageHeader';
import MovieCardList from '../components/Movies/MovieCardList';

const MoviesSearch = () => {
  return (
  	<View style={style.moviesSearch}>
    	<PageHeader 
        headerTitle = 'Search Movies'
        headline = "We'll help you find your favorite movies. Discover wonderfull movies."
        searchFormVisible = 'true'
      />
      <MovieCardList />
    </View>
  );
}

const style = StyleSheet.create({
  moviesSearch: {
    flex: 1
  }
})

export default MoviesSearch
import React from 'react';
import { StyleSheet, View } from 'react-native';

import PageHeader from '../components/common/PageHeader';
import MovieCardList from '../components/MovieCardList';
import SearchForm from '../components/common/SearchForm';

const MoviesSearch = () => {
  return (
  	<View style={style.moviesSearch}>
      <PageHeader 
        headerTitle = 'Search Movies'
        headline = "We'll help you find your favorite movies. Discover wonderfull movies."
      />
    	<View style={{ paddingHorizontal: 20 }}>
        <SearchForm />
      </View>
      <MovieCardList />
    </View>
  );
}

const style = StyleSheet.create({
  moviesSearch: {
    flex: 1,
    paddingTop: 20
  }
})

export default MoviesSearch
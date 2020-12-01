import React from 'react';
import { StyleSheet, View } from 'react-native';

import PageHeader from '../components/common/PageHeader';
import MovieCardList from '../components/Movies/MovieCardList';
import SearchForm from '../components/common/SearchForm';

const MoviesSearch = () => {
  return (
  	<View style={style.moviesSearch}>
      <View>
  		<PageHeader />
      </View>
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
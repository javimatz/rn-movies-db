import React from 'react';
import { StyleSheet, View } from 'react-native';

import PageHeader from '../components/common/PageHeader';
import MovieCardList from '../components/Movies/MovieCardList';
import SearchForm from '../components/common/SearchForm';

const MoviesSearch = () => {
  return (
  	<View>
  		<PageHeader />
      <SearchForm />
      <MovieCardList />
    </View>
  );
}

export default MoviesSearch
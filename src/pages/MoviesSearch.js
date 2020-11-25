import React from 'react';
import { StyleSheet, View } from 'react-native';

import PageHeader from '../components/common/PageHeader';
import MovieCardList from '../components/Movies/MovieCardList';
import SearchForm from '../components/common/SearchForm';

import HeaderTitle from '../components/common/HeaderTitle';

const style = StyleSheet.create({
  
})

const MoviesSearch = () => {
  return (
  	<View>
  		<PageHeader>
	        <HeaderTitle 
    	    	headerTitle='Search Movies' 
    	    	headerText="We'll help you find your favorite movies. Discover wonderfull movies." 
    	    />
  		</PageHeader>
      <SearchForm />
      <MovieCardList />
    </View>
  );
}

export default MoviesSearch
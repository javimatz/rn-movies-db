import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import PageHeader from '../components/common/PageHeader';
import MovieCardList from '../components/Movies/MovieCardList';

import HeaderTitle from '../components/common/HeaderTitle';

const style = StyleSheet.create({
  
})

const Movies = () => {
  return (
  	<View>
  		<PageHeader>
	        <HeaderTitle 
    	    	headerTitle='Must Watch TV Show' 
    	    />
  		</PageHeader>
      <MovieCardList />
    </View>
  );
}

export default Movies
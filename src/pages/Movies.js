import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import PageHeader from '../components/common/PageHeader';
import MovieCardList from '../components/MovieCardList';


const Movies = () => {
  return (
  	<View style={{ 
  		flex: 1,
  		paddingTop: 20 
  	}}>
      <PageHeader 
        headerTitle='Must Watch TV Show'
      />
  		<MovieCardList />
    </View>
  );
}

const style = StyleSheet.create({
  
})

export default Movies
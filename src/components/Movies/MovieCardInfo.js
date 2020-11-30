import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TagList from '../common/TagList';


const MovieCard = ({ movieTitle }) => {
  
  // Images API
  const url = 'https://image.tmdb.org/t/p/w500/'
  
  return (
  	<View>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{ movieTitle }</Text>
    	<Text style={{ fontSize: 16, fontWeight: 'bold' }}>8.3</Text>
    	<TagList />
    </View>
  );
}

export default MovieCard
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import TagList from './TagList';

const style = StyleSheet.create({
	img: {
    	borderRadius: 10,
    	height: 200,
    	margin: 5,
    	width: 120,
  	},
})

const MovieCard = ({posterPath}) => {
  
  // Images API
  const url = 'https://image.tmdb.org/t/p/w500/'
  
  return (
  	<View>
  		<Image source={{ uri: url.concat(posterPath) }} style={style.img} />
        <Text>cardTitle</Text>
        <Text>rate</Text>
        <TagList />
    </View>
  );
}

export default MovieCard
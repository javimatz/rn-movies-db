import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import TagList from '../common/TagList';

const style = StyleSheet.create({
	img: {
    	borderRadius: 10,
    	height: 150,
    	margin: 5,
    	width: 100,
  	},
})

const MovieCard = ({ posterPath, movieTitle }) => {
  
  // Images API
  const url = 'https://image.tmdb.org/t/p/w500/'
  
  return (
  	<View>
  		<Image source={{ uri: url.concat(posterPath) }} style={style.img} />
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{ movieTitle }</Text>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>8.3</Text>
        <TagList />
    </View>
  );
}

export default MovieCard
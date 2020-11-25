import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import MovieCardInfo from './MovieCardInfo';

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
  	<View style={{
      alignItems: 'center',
      flexDirection: 'row',
    }}>
  		  <Image source={{ uri: url.concat(posterPath) }} style={style.img} />
        <MovieCardInfo movieTitle={movieTitle} />
    </View>
  );
}

export default MovieCard
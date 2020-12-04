import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import MovieCardInfo from './MovieCardInfo';

const MovieCard = ({ posterPath, movieTitle }) => {
  
  // Images API
  const url = 'https://image.tmdb.org/t/p/w500/'
  
  return (
  	<View style={style.movieCard}>
  		  <Image 
          source={{ uri: url.concat(posterPath) }} 
          style={style.movieCardImg} 
        />
        <View style={style.movieCardInfo}>
          <MovieCardInfo movieTitle={movieTitle} />          
        </View>
    </View>
  );
}

const style = StyleSheet.create({
  movieCard: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  movieCardImg: {
   	borderRadius: 10,
  	height: 150,
  	marginRight: 10,
  	width: 100,
  },
  movieCardInfo: {
    flexBasis: '80%',
  }
})

export default MovieCard
import React from 'react';
import {FlatList, StyleSheet, View } from 'react-native';

// Components
import MovieCard from './MovieCard';

// JSON Data
import movies from '../../utils/popular.json';

const moviesList = movies.results


const MovieCardList = () => {
  return (
  	<View style={style.movieCardList}>
        <FlatList
          showsVerticalScrollIndicator={false} 
        	data = { moviesList }
        	renderItem = { ({item}) => 
        		<MovieCard 
        			posterPath={item.poster_path}
        			movieTitle={item.original_title}
        		/> 
        	}
        	keyExtractor = { (item) => item.id.toString() }
        />
    </View>
  );
}

const style = StyleSheet.create({
  movieCardList: {
    flex: 1,
    paddingHorizontal: 20, 
    paddingVertical: 30,
  }  
})

export default MovieCardList
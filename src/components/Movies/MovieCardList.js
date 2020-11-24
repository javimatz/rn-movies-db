import React from 'react';
import {FlatList, StyleSheet, View } from 'react-native';

// Components
import MovieCard from './MovieCard';

// JSON Data
import movies from '../../utils/popular.json';

const moviesList = movies.results

const style = StyleSheet.create({
  
})

const MovieCardList = () => {
  return (
  	<View>
        <FlatList 
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

export default MovieCardList
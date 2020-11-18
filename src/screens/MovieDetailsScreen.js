import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Image } from 'react-native';

import movieDetails from '../utils/movieDetails.json'
import movieCast from '../utils/movieCredits.json'
import movieImages from '../utils/movieImages.json'
import movieRecommendations from '../utils/movieRecommendations.json'

const apiImagesURL = 'https://image.tmdb.org/t/p/w500'
const youtubeURL = 'https://www.youtube.com/watch?v=BdJKm16Co6M'

// API URL/movie/movieID
const title = movieDetails.original_title
const rate = movieDetails.vote_average
const overview = movieDetails.overview
const tags = movieDetails.genres

// Images API
const poster = apiImagesURL + movieDetails.poster_path

// Movie Cast API
const casting = movieCast.cast

// Cast Images
const castImage = apiImagesURL + casting.profile_path

// Movie Images
const movieImg = movieImages.backdrops 

// Movie Recommendations
const movieRecom = movieRecommendations.results 


const style = StyleSheet.create({
  view: {
    paddingTop: 30
  },
  img: {
    height: 200,
    width: 100
  },
  list: {
  	height: 100
  }
})

const MovieDetailsScreen = () => {
  return (
    <ScrollView style={style.view}>
    	<Image source={{uri: poster}} style={style.img} />
		<Text>{title}</Text>
		<Text>{rate}</Text>



		<FlatList
			style = {style.list}
			data={tags}
			renderItem={({item}) => <Text>{item.name}</Text>}
			keyExtractor = { (item) => item.id.toString() }
			horizontal
		/>

		<Text>Overview</Text>
		<Text>{overview}</Text>

		<Text>Cast</Text>		
		<FlatList 
			data={casting}
			renderItem = { ({item}) => {
				return (
					<View>
						<Image source={{ uri: apiImagesURL + item.profile_path }} style={style.img} />
						<Text>{item.name}</Text> 
					</View>
				)
			}}
			keyExtractor={ (item) => item.id.toString()}
			horizontal
		/>

		<Text>Images</Text>
		<FlatList 
			data={movieImg}
			renderItem={({item}) => {
				return (
					<View>
						<Image source={{ uri: apiImagesURL + item.file_path }} style={style.img} />
					</View>
				)
			}}
			keyExtractor={(item) => Math.random().toString() }
			horizontal
		/>

	    <Text>Recommendations</Text>
	    <FlatList 
	    	data = {movieRecom}
	    	renderItem = { ({item}) => {
	    		return (
	    			<View>
	    				<Image source={{ uri: apiImagesURL + item.poster_path }} style={style.img} />
	    				<Text>{item.original_title}</Text>
	    			</View>
	    		)
	    	}}
	    	keyExtractor = {(item) => item.id.toString() }
	    	horizontal
	    />
    </ScrollView>
  );
}

export default MovieDetailsScreen
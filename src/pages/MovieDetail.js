import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';


// Components
import ImageCardList from '../components/common/ImageCardList'
import CastingList from '../components/MovieDetail/CastingList'
import PosterBackground from '../components/MovieDetail/PosterBackground'
import Overview from '../components/MovieDetail/Overview'
import TagList from '../components/common/TagList'
import MovieImagesList from '../components/MovieDetail/MovieImagesList'

// API data
import movieDetails from '../utils/movieDetails.json'
import movieCast from '../utils/movieCredits.json'
import movieRecommendations from '../utils/movieRecommendations.json'

// URLs
const apiImagesURL = 'https://image.tmdb.org/t/p/w500'
const youtubeURL = 'https://www.youtube.com/watch?v=BdJKm16Co6M'


// Overview Text
const overview = movieDetails.overview

// Movie Cast API
const casting = movieCast.cast

// Movie Recommendations
const movieRecom = movieRecommendations.results 

// Styles
const style = StyleSheet.create({
	screenContainer: {
	    paddingBottom: 50,
	    padding: 10,
	},
})

const MovieDetailsScreen = () => {	
	return (
		<ScrollView style={style.screenContainer}>	
			<PosterBackground />
			<TagList />			        
			<Overview text={overview} />
			<CastingList title='Casting' data={casting} imageWithTitle />
			<MovieImagesList />
			<ImageCardList title='Recommendations' data={movieRecom} imageWithTitle />
		</ScrollView>

	);
}

export default MovieDetailsScreen
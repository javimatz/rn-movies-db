import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';


// Components
import MovieRowList from '../components/common/MovieRowList'
import CastingList from '../components/MovieDetail/CastingList'
import PosterBackground from '../components/MovieDetail/PosterBackground'
import Overview from '../components/MovieDetail/Overview'
import TagListWithBorder from '../components/common/TagListWithBorder'
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
	    backgroundColor: '#000',

	},
})

const MovieDetailsScreen = () => {	
	return (
		<ScrollView style={style.screenContainer}>	
			<PosterBackground />
			<View 
				style={{ 
					padding: 10,
					borderRadius: 20,
					backgroundColor: '#FFF'
				}}
			>
				<TagListWithBorder />	
				<View style={{ paddingVertical: 10 }}>		        
					<Overview text={overview} />
				</View>		        
				<View style={{ marginTop: 10 }}>
					<CastingList title='Cast' data={casting} imageWithTitle />
				</View>
				<View style={{ marginVertical: 20 }}>
					<MovieImagesList />
				</View>
				<View style={{ }}>
					<MovieRowList title='Recommendations' data={movieRecom} imageWithTitle={true} />
				</View>
			</View>
		</ScrollView>

	);
}

export default MovieDetailsScreen
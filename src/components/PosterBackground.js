import React from 'react';
import { ImageBackground, StyleSheet, useWindowDimensions, Text } from 'react-native';


import movieDetails from '../utils/movieDetails.json'

// Images API
const apiImagesURL = 'https://image.tmdb.org/t/p/w500'

const poster = apiImagesURL + movieDetails.poster_path

const title = movieDetails.original_title
const rate = movieDetails.vote_average

const style = StyleSheet.create({
	movieTitle: {
		color: '#FFF',
		fontSize: 20,
		fontWeight: 'bold'
	},
	movieTitleBar: {
		backgroundColor: '#FFF',
		height: 5,
		marginLeft: 5,
		width: 30,
	},
})

const PosterBackground = () => {
	
	const windowWidth = useWindowDimensions().width
	const windowHeight = useWindowDimensions().height
	
	return (
		<ImageBackground 
			source={{uri: poster}} 
			style={{ 
				height: windowHeight/3,
				width: windowWidth		
			}}>
			<Text style={style.movieTitle}>{title}</Text>
			<Text style={style.movieTitleBar} />
			<Text>{rate}</Text>
		</ImageBackground>
	);
}

export default PosterBackground
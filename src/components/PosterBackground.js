import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

import BackButton from './common/BackButton'
import MovieRate from './common/MovieRate'

import movieDetails from '../utils/movieDetails.json'


// Images API
const apiImagesURL = 'https://image.tmdb.org/t/p/w500'

const poster = apiImagesURL + movieDetails.poster_path

const title = movieDetails.original_title

const PosterBackground = () => {
	return (
		<View style={{
			height: '20%',
		}}>
			<ImageBackground 
				source={{uri: poster}} 
				style={{ width: '100%', height: '100%' }}
			>
				<View style={{ 
					justifyContent: 'space-between',
					flexDirection: 'column',
					height: '100%', 
				}}>
					<View style={{ padding: 20 }}>
						<BackButton />
					</View>
					<View style={{ backgroundColor: 'red', padding: 20, backgroundColor: 'rgba(50,50,50,0.4)' }}>
						<Text style={style.movieTitle}>{title}</Text>
						<Text style={style.movieTitleBar} />
						<MovieRate />
					</View>
				</View>
			</ImageBackground>
		</View>
	);
}

const style = StyleSheet.create({
	movieTitle: {
		color: '#FFF',
		fontSize: 20,
		fontWeight: 'bold'
	},
	movieTitleBar: {
		backgroundColor: '#FFF',
		height: 5,
		marginTop: 10,
		width: 30,
	},
})

export default PosterBackground
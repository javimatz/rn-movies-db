import React, { Fragment } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

import movieImages from '../../utils/movieImages.json'
const apiImagesURL = 'https://image.tmdb.org/t/p/w500'

// Movie Images
const movieImg = movieImages.backdrops 


const style = StyleSheet.create({
	img: {
    borderRadius: 10,
    height: 200,
    margin: 5,
    width: 120,
  },
})

const MovieImageList = () => {
  
  return (
  	<Fragment>
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
			keyExtractor={(item) => item.file_path.toString() }
			horizontal
		/>
  	</Fragment>
  );
}

export default MovieImageList
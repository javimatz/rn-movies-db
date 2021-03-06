import React from 'react';
import { StyleSheet, Text } from 'react-native';

import movieDetails from '../../utils/movieDetails.json'

const tags = movieDetails.genres


const TagItem = ({ tagName }) => {
  return (
  	<Text style={style.tagItem} >{tagName}</Text>
  );
}

const style = StyleSheet.create({
	tagItem: {
		fontSize: 13,
		paddingRight: 5,
	},
})

export default TagItem
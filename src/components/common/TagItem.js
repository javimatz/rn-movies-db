import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';

import movieDetails from '../../utils/movieDetails.json'

const tags = movieDetails.genres

const style = StyleSheet.create({
	tagItem: {
		fontSize: 14,
		paddingRight: 5,
	},
})

const TagItem = ({ tagName }) => {
  return (
  	<Text style={style.tagItem} >{tagName}</Text>
  );
}

export default TagItem
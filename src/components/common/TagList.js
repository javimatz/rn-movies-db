import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';

import movieDetails from '../../utils/movieDetails.json'

const tags = movieDetails.genres

const style = StyleSheet.create({
	list: {
		height: 100
	},
})

const TagList = () => {
  return (
  	<FlatList
		style = {style.list}
		data={tags}
		renderItem={({item}) => <Text>{item.name}</Text>}
		keyExtractor = { (item) => item.id.toString() }
		horizontal
	/>
  );
}

export default TagList
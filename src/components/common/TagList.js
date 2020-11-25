import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

// Components
import TagItem from './TagItem'

// JSON Data
import movieDetails from '../../utils/movieDetails.json'

const tags = movieDetails.genres

const style = StyleSheet.create({
	
})

const TagList = () => {
  return (
  	<FlatList
		data={tags}
		renderItem={({item}) => <TagItem tagName = {item.name} />}
		keyExtractor = { (item) => item.id.toString() }
		horizontal
	/>
  );
}

export default TagList
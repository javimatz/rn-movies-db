import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';

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
		style = {style.list}
		data={tags}
		renderItem={({item}) => <TagItem tagName = {item.name} />}
		keyExtractor = { (item) => item.id.toString() }
		horizontal
	/>
  );
}

export default TagList
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

// Components
import TagItem from './TagItem'

// JSON Data
import movieDetails from '../../utils/movieDetails.json'

const tags = movieDetails.genres


const TagList = () => {
  return (
  	<View style={style.tagList}>
  	{
  		tags.map((item) => <TagItem tagName={item.name} />)
  	}
  	</View>
  	
  );
}

const style = StyleSheet.create({
	tagList: {
		flexDirection: 'row', 
		flexWrap: 'wrap', 
		width: '80%'
	}		
})

export default TagList
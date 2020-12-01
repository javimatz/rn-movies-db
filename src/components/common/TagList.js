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
      { tags.map((item, index) => <TagItem tagName={item.name} />)}
    </View>
  );
}

const style = StyleSheet.create({
  tagList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '80%',
  }
})

 
// <FlatList
//   data = { tags }
//   numColumns = {2}
//   renderItem = { ({item}) => 
//     <TagItem tagName={item.name} /> 
//   }
//   keyExtractor = { (item) => item.id.toString() }
// />

export default TagList
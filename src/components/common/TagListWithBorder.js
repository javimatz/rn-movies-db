import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';


// JSON Data
import movieDetails from '../../utils/movieDetails.json'

const tags = movieDetails.genres


const TagListWithBorder = () => {
  return (
  	<View style={style.tagList}>
      { tags.map((item, index) => 
        <View key={item.id} style={style.tagItemContainer}>
          <Text style={style.tagItem} >{item.name}</Text>
        </View>)}
    </View>
  );
}

const style = StyleSheet.create({
  tagList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tagItemContainer: {
    borderColor: '#888',
    borderRadius: 5,
    borderWidth: 1,
    marginRight: 5,
    marginTop: 8,
    padding: 3,

  },
  tagItem: {
    color: '#888',
    fontSize: 13,
  }
})

export default TagListWithBorder
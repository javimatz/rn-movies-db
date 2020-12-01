import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

// Components
import TagItem from './TagItem'

// JSON Data
import movieDetails from '../../utils/movieDetails.json'

const tags = movieDetails.genres


const TagList = () => {
  return (
  	<View>
      <FlatList
          data = { tags }
          numColumns = {2}
          renderItem = { ({item}) => 
            <TagItem tagName={item.name} /> 
          }
          keyExtractor = { (item) => item.id.toString() }
        />
    </View>
  	
  );
}

export default TagList
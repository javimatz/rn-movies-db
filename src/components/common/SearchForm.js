import React from 'react';
import { StyleSheet, TextInput, TouchableWithoutFeedback, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const style = StyleSheet.create({
  searchForm: {
    flexDirection: 'row',
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 10,
    borderRadius: 50
  }
})

const SearchForm = () => {
  return (
  	<View style={style.searchForm}>
        <TouchableWithoutFeedback>
          <Ionicons name="ios-search" size={28} color="#000" />
        </TouchableWithoutFeedback>
        <TextInput
          style={{ 
            color: '#AAA',
            marginLeft: 10,
          }}
          placeholder='Search'
        />
    </View>
  );
}

export default SearchForm
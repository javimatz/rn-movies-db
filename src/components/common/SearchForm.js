import React from 'react';
import { StyleSheet, TextInput, TouchableWithoutFeedback, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const style = StyleSheet.create({
  
})

const SearchForm = () => {
  return (
  	<View
      style={{ 
        flexDirection: 'row',
        paddingLeft: 20,
      }}
    >
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
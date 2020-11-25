import React from 'react';
import { StyleSheet, TextInput, TouchableWithoutFeedback, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const style = StyleSheet.create({
  
})

const SearchForm = () => {
  return (
  	<View>
        <TouchableWithoutFeedback>
          <Ionicons name="ios-search" size={32} color="#000" />
        </TouchableWithoutFeedback>
        <TextInput
          style={{ borderColor: 'gray', borderWidth: 5 }}
          value='Search Movies'
        />
    </View>
  );
}

export default SearchForm
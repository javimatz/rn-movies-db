import React from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';

import { Ionicons } from '@expo/vector-icons';


const SearchButton = () => {
  return (
	<TouchableWithoutFeedback>
		<Ionicons name="ios-search" size={28} color="#000" />
	</TouchableWithoutFeedback>
  );
}

const style = StyleSheet.create({

})

export default SearchButton
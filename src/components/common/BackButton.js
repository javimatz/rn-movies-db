import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const style = StyleSheet.create({
  
})

const BackButton = () => {
  return (
	<TouchableWithoutFeedback>
		<Ionicons name="ios-arrow-back" size={28} color="#000" />
	</TouchableWithoutFeedback>
  );
}

export default BackButton
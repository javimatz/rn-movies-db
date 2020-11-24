import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const style = StyleSheet.create({
  
})

const BackButton = () => {
  return (
	<TouchableWithoutFeedback>
		<Ionicons name="ios-arrow-back" size={32} color="#000" />
	</TouchableWithoutFeedback>
  );
}

export default BackButton
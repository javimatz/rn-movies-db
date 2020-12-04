import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'


const PlayButton = () => {
  return (
  	<View style={style.playButton}>
		<TouchableWithoutFeedback>
			<FontAwesomeIcon style={{ color: '#FFF' }} icon={faPlay} />
		</TouchableWithoutFeedback>
	</View>
  );
}

const style = StyleSheet.create({
	playButton: {
		backgroundColor: 'red',
		borderRadius: 10,
		paddingHorizontal: 20,
		paddingVertical: 15,
		position: 'absolute',
		right: 30,
		top: -25,
	}
})

export default PlayButton
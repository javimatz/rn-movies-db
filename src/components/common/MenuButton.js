import React from 'react';
import { Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import menuIcon from '../../assets/icons/open-menu.png'

const MenuButton = () => {
  return (
	<TouchableWithoutFeedback>
		<Image 
			source={menuIcon} 
			style={{ width: 28, height: 28 }}
		/>
	</TouchableWithoutFeedback>
  );
}

const style = StyleSheet.create({

})

export default MenuButton
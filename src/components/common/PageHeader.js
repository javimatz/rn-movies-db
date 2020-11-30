import React from 'react';
import {StyleSheet, View } from 'react-native';

import HeaderTitle from './HeaderTitle';
import BackButton from './BackButton';

const PageHeader = ({ }) => {
	return (
		<View style={style.pageHeader}>
			<View style={style.backButton}>
				<BackButton />
			</View>
			<View style={style.headerTitle}>
				<HeaderTitle 
					headerTitle='Search Movies' 
					headerText="We'll help you find your favorite movies. Discover wonderfull movies." 
				/>
			</View>
		</View>
	);
}

const style = StyleSheet.create({
  pageHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'yellow'
  },
  headerTitle: {
    backgroundColor: 'red',
    flexBasis: '90%'
  },
  backButton: {
  	backgroundColor: 'pink',
  	left: 20,
  	paddingHorizontal: 10,
  	position: 'absolute',
  	zIndex: 1
  } 
})

export default PageHeader
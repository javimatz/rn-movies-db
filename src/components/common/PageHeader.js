import React from 'react';
import {StyleSheet, View } from 'react-native';

import HeaderTitle from './HeaderTitle';
import BackButton from './BackButton';

const PageHeader = ({ headerTitle, headline }) => {
	return (
		<View style={style.pageHeader}>
			
			<View style={style.backButton}>
				<BackButton />
			</View>	
			
			<View style={style.headerTitle}>
				<HeaderTitle 
					headerTitle={headerTitle} 
					headline={headline} 
				/>
			</View>
		</View>
	);
}

const style = StyleSheet.create({
  pageHeader: {},
  backButton: {
  	paddingLeft: 20,
  	position: 'absolute',
  },
})

export default PageHeader
import React from 'react';
import {StyleSheet, View } from 'react-native';

import HeaderTitle from './HeaderTitle';
import BackButton from './BackButton';
import SearchForm from './SearchForm';

const PageHeader = ({ headerTitle, headline, searchFormVisible }) => {
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
			{ searchFormVisible && <SearchForm />}
		</View>
	);
}

const style = StyleSheet.create({
  pageHeader: {
  	paddingHorizontal: 20
  },
  headerTitle: {	
  	paddingHorizontal: 10,
  },
  backButton: {
  	paddingLeft: 20,
  	position: 'absolute',
  },
})

export default PageHeader
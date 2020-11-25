import React from 'react';
import {StyleSheet, View } from 'react-native';

import BackButton from '../common/BackButton';

const style = StyleSheet.create({
  
})

const PageHeader = ({ children }) => {
  return (
  	<View style={{
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly'
	}}>
      <BackButton />    
      {children}
    </View>
  );
}

export default PageHeader
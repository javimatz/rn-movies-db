import React from 'react';
import {StyleSheet, View } from 'react-native';

import BackButton from '../common/BackButton';

const style = StyleSheet.create({
  
})

const PageHeader = ({ children }) => {
  return (
  	<View style={{
    	flexDirection: 'row',
    	justifyContent: 'flex-start',
      paddingLeft: 20
    }}>
      <BackButton 
        style={{
          backgroundColor: 'orange'
        }}
      />    
      {children}
    </View>
  );
}

export default PageHeader
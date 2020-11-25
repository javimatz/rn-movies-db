import React, { Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const style = StyleSheet.create({
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  headerTitleBar: {
    backgroundColor: 'orange',
    height: 5,
    marginLeft: 5,
    width: 30,
  },
})

const HeaderTitle = ({ headerTitle, headerText }) => {
  return (
    <View style={{
      alignItems: 'center',
      display: 'flex',
    }}>		
      <Text style = {style.headerTitle}>{headerTitle}</Text>
    	<Text style = {style.headerTitleBar} />
      { headerText && <Text>{headerText}</Text> }
    </View>		
  );
}

export default HeaderTitle
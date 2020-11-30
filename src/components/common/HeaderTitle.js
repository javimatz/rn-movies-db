import React, { Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const style = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerTitleBar: {
    backgroundColor: 'orange',
    height: 5,
    width: 40,
  },
  headerText: {
    fontSize: 14,
    paddingVertical: 10,
    textAlign: 'center'
  },
})

const HeaderTitle = ({ headerTitle, headerText }) => {
  return (
    <View style={{ alignItems: 'center' }}>		
      <Text style = {style.headerTitle}>{headerTitle}</Text>
    	<Text style = {style.headerTitleBar} />
      <Text style = {style.headerText}>{headerText}</Text>
    </View>		
  );
}

// { headerText && <View style={{ padding: 10 }}><Text>{headerText}</Text></View> }

export default HeaderTitle
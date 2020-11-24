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

const HeaderTitle = ({ title }) => {
  return (
    <View>		
      <Text style = {style.headerTitle}>{title}</Text>
    	<Text style = {style.headerTitleBar} />
    </View>		
  );
}

export default HeaderTitle
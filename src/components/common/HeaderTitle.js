import React, { Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const style = StyleSheet.create({
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerTitleBar: {
    backgroundColor: 'orange',
    height: 5,
    width: 40,
  },
})

const HeaderTitle = ({ headerTitle, headerText }) => {
  return (
    <View style={{
      alignItems: 'center',
    }}>		
      <Text style = {style.headerTitle}>{headerTitle}</Text>
    	<Text style = {style.headerTitleBar} />
      { headerText && <View style={{ padding: 10 }}><Text>{headerText}</Text></View> }
    </View>		
  );
}

export default HeaderTitle
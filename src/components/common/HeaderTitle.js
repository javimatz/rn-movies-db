import React, { Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const style = StyleSheet.create({
  headline: {
    fontSize: 14,
    paddingVertical: 15,
    paddingHorizontal: 20,
    textAlign: 'center'
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerTitleBar: {
    backgroundColor: 'orange',
    height: 5,
    width: 40,
  },
})

const HeaderTitle = ({ headerTitle, headline }) => {
  return (
    <View style={{ alignItems: 'center' }}>		
      <Text style = {style.headerTitle}>{headerTitle}</Text>
    	<Text style = {style.headerTitleBar} />
      {headline && <Text style = {style.headline}>{headline}</Text>}
    </View>		
  );
}

// { headline && <View style={{ padding: 10 }}><Text>{headline}</Text></View> }

export default HeaderTitle
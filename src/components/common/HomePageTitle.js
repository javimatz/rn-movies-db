import React, { Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const style = StyleSheet.create({
  homePageTitle: {
  	alignItems: 'flex-start',
  	paddingVertical: 20
  },  
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  headerTitleBar: {
    backgroundColor: 'orange',
    height: 5,
    width: 40,
  },
})

const HomePageTitle = ({ headerTitle, headline }) => {
  return (
    <View style={style.homePageTitle}>		
      <Text style = {style.headerTitle}>{headerTitle}</Text>
    	<Text style = {style.headerTitleBar} />
      {headline && <Text style = {style.headline}>{headline}</Text>}
    </View>		
  );
}

export default HomePageTitle
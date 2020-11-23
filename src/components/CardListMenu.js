import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const style = StyleSheet.create({
	listTitle: {
	    fontSize: 20,
	    fontWeight: 'bold',
	    paddingLeft: 5,
	    paddingTop: 20,
	},  
})

const CardListMenu = ({ title }) => {
  return (
  	<View>
        <Text style={style.listTitle}>{title}</Text>
        <Button title='More' />
    </View>
  );
}

export default CardListMenu
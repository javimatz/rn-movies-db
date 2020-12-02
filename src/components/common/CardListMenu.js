import React from 'react';
import { Button, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

const style = StyleSheet.create({
	cardListMenu: {
		alignItems: 'flex-end',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	listTitle: {
	    fontSize: 20,
	    fontWeight: 'bold',
	},
	moreLink: {
		color: 'orange',
		fontSize: 16,
		fontWeight: 'bold',
	}  
})

const CardListMenu = ({ title }) => {
  return (
  	<View style={style.cardListMenu}>
        <Text style={style.listTitle}>{title}</Text>
        <Text style={style.moreLink}>More</Text>
    </View>
  );
}

export default CardListMenu
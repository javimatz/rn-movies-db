import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const style = StyleSheet.create({

})

const Overview = ({ text }) => {
  return (
  	<View>
  		<Text style={{ 
  			fontSize: 18, 
  			fontWeight: 'bold', 
  		}}>Overview</Text>
		<Text
			style={{
				fontSize: 14,
				marginTop: 5
			}}
		>{text}</Text>
  	</View>

  );
}

export default Overview
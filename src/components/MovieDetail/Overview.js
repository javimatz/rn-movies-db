import React, { Fragment } from 'react';
import { StyleSheet, Text } from 'react-native';

const style = StyleSheet.create({

})

const Overview = ({ text }) => {
  return (
  	<Fragment>
  		<Text>Overview</Text>
		<Text>{text}</Text>
  	</Fragment>

  );
}

export default Overview
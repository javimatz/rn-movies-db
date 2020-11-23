import React, { Fragment } from 'react';
import { StyleSheet, Text } from 'react-native';

const style = StyleSheet.create({
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 5
  },
  headerTitleBar: {
    backgroundColor: 'orange',
    height: 5,
    marginLeft: 5,
    width: 30,
  },
})

const HeaderTitle = () => {
  return (
     <Fragment>		
     	<Text style = {style.headerTitle}>Movies</Text>
     	<Text style={style.headerTitleBar} />
     </Fragment>		
  );
}

export default HeaderTitle
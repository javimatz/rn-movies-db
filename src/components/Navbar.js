import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

import SearchButton from './common/SearchButton'
import MenuButton from './common/MenuButton'

const Navbar = () => {
  return (
  	<View style={style.navbar} >
        <MenuButton />
        <SearchButton />
    </View>
  );
}

const style = StyleSheet.create({
	navbar: {
    	flexDirection: 'row',
    	justifyContent: 'space-between'
  	}
})

export default Navbar
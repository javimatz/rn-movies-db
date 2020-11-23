import React from 'react';
import {StyleSheet, View } from 'react-native';

import BackButton from './BackButton';
import HeaderTitle from './HeaderTitle';

const style = StyleSheet.create({
  
})

const MoviesHeader = () => {
  return (
  	<View>
        <BackButton />
        <HeaderTitle />
    </View>
  );
}

export default MoviesHeader
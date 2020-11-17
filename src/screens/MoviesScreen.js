import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

import State from '../utils/popular.json'

const url = 'https://image.tmdb.org/t/p/w500/'
const state = State.results

const style = {
  view: {
    paddingTop: 30
  },
  img: {
    height: 200,
    width: 100
  }
}

const MoviesScreen = () => {
  return (
    <View style={style.view}>
      <Text>Movies</Text>
      <Text>Popular</Text>

      <FlatList
        data={state}
        renderItem={ ({item}) => {
          return <Image source={{ uri: url + item.poster_path }} style={style.img} /> }
        }
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

export default MoviesScreen
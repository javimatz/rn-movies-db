// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  FlatList, 
  Image,
  StatusBar,
  ScrollView,
  StyleSheet, 
  Text, 
  View,  
} from 'react-native';

import popularMovies from '../utils/popular.json'
import topMovies from '../utils/topMovies.json'
import discoverMovies from '../utils/discoverMovies.json'

const url = 'https://image.tmdb.org/t/p/w500/'

const popular = popularMovies.results
const top = topMovies.results
const discover = discoverMovies.results

const style = StyleSheet.create({
  appContainer: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  screenContainer: {
    paddingBottom: 50,
    padding: 10,
  },
  img: {
    borderRadius: 10,
    height: 200,
    margin: 5,
    width: 120,
  },
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
  listTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 5,
    paddingTop: 20,
  },
})

const MoviesScreen = () => {
  return (
    <ScrollView style={style.appContainer}>
      <StatusBar backgroundColor="#000"  />
      <View style={style.screenContainer}>
        <Text style = {style.headerTitle} >Movies</Text>
        <Text style={style.headerTitleBar} />
      
        <Text style={style.listTitle}>Popular</Text>

        <FlatList
          data={popular}
          renderItem={ ({item}) => {
            return <Image source={{ uri: url + item.poster_path }} style={style.img} /> }
          }
          keyExtractor={item => item.id.toString()}
          horizontal
        />

        <Text style={style.listTitle} >Top Rated</Text>
        <FlatList
          data={top}
          renderItem={ ({item}) => {
            return <Image source={{ uri: url + item.poster_path }} style={style.img} /> }
          }
          keyExtractor={item => item.id.toString()}
          horizontal
        />

        <Text style={style.listTitle} >Must Watch</Text>
        <FlatList
          data={discover}
          renderItem={ ({item}) => {
            return <Image source={{ uri: url + item.poster_path }} style={style.img} /> }
          }
          keyExtractor={item => item.id.toString()}
          horizontal
        />
      </View>
    </ScrollView>
  );
}

export default MoviesScreen
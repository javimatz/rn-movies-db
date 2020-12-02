import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

// Components
import MovieRowList from '../components/common/MovieRowList'
import HeaderTitle from '../components/common/HeaderTitle'
import Navbar from '../components/MoviesHome/Navbar'

// Movies JSON Data
import popularMovies from '../utils/popular.json'

// Movies Lists
const popular = popularMovies.results

const MoviesHome = () => {
  
  return (
      <ScrollView style={style.screenContainer}>
        <Navbar />
        <HeaderTitle headerTitle='Movies' />
        <MovieRowList title='Popular' data={popular} />
        <MovieRowList title='Top Rated' data={popular} />
        <MovieRowList title='Must Watch' data={popular} />
      </ScrollView>
  );
}

const style = StyleSheet.create({
  screenContainer: {
    paddingBottom: 50,
    padding: 10,
  },
})

export default MoviesHome
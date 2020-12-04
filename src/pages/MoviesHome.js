import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

// Components
import MovieRowList from '../components/common/MovieRowList'
import HomePageTitle from '../components/common/HomePageTitle'
import Navbar from '../components/Navbar'

// Movies JSON Data
import popularMovies from '../utils/popular.json'

// Movies Lists
const popular = popularMovies.results

const MoviesHome = () => {
  
  return (
      <ScrollView style={style.screenContainer}>
        <Navbar />
        <HomePageTitle headerTitle='Movies' />
        <MovieRowList title='Popular' data={popular} />
        <MovieRowList title='Top Rated' data={popular} />
        <MovieRowList title='Must Watch' data={popular} />
      </ScrollView>
  );
}

const style = StyleSheet.create({
  screenContainer: {
    padding: 10,
  },
})

export default MoviesHome
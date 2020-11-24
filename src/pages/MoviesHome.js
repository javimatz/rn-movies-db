import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

// Components
import ImageCardList from '../components/common/ImageCardList'
import HeaderTitle from '../components/common/HeaderTitle'
import Navbar from '../components/MoviesHome/Navbar'

// Movies JSON Data
import popularMovies from '../utils/popular.json'
import topMovies from '../utils/topMovies.json'
import discoverMovies from '../utils/discoverMovies.json'


const style = StyleSheet.create({
  screenContainer: {
    paddingBottom: 50,
    padding: 10,
  },
})

const MoviesHome = () => {
  
  // Movies Lists
  const popular = popularMovies.results
  const top = topMovies.results
  const discover = discoverMovies.results
  
  return (
      <ScrollView style={style.screenContainer}>
        <Navbar />
        <HeaderTitle title='Movies' />
        <ImageCardList title='Popular' data={popular} />
        <ImageCardList title='Top Rated' data={top} />
        <ImageCardList title='Must Watch' data={discover} />
      </ScrollView>
  );
}

export default MoviesHome
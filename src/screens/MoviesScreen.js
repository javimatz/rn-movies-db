import React from 'react';
import { StyleSheet, View } from 'react-native';

// Components
import ImageList from '../components/ImageList'
import HeaderTitle from '../components/HeaderTitle'

// Movies JSON Data
import popularMovies from '../utils/popular.json'
import topMovies from '../utils/topMovies.json'
import discoverMovies from '../utils/discoverMovies.json'
import movieRecommendations from '../utils/movieRecommendations.json'


const style = StyleSheet.create({
  screenContainer: {
    paddingBottom: 50,
    padding: 10,
  },
})

const MoviesScreen = () => {
  
  // Movies Lists
  const popular = popularMovies.results
  const top = topMovies.results
  const discover = discoverMovies.results
  const movieRecom = movieRecommendations.results 

  return (
      <View style={style.screenContainer}>
        <HeaderTitle />
        <ImageList title='Popular' data={popular} />
        <ImageList title='Top Rated' data={top} />
        <ImageList title='Must Watch' data={discover} />
        <ImageList title='Recomm' data={movieRecom} />
      </View>
  );
}

export default MoviesScreen
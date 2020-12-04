import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

// Components
import MovieRowList from '../components/common/MovieRowList'
import HomePageTitle from '../components/common/HomePageTitle'
import Navbar from '../components/Navbar'

// Movies JSON Data
const popularMoviesURL = 'https://api.themoviedb.org/3/movie/popular?api_key=330f085e0745d5b685811654fe129dc3&language=en-US&page=1'
const topMoviesURL = 'https://api.themoviedb.org/3/tv/top_rated?api_key=330f085e0745d5b685811654fe129dc3&language=en-US&page=1'

// Movies Lists

const MoviesHome = () => {
  
  const [popular, setPopular] = useState([]) 
  const [top, setTop] = useState([]) 
  const [latest, setLatest] = useState([]) 
  
  const fetchPopularMovies = async () => {
    let res = await fetch(popularMoviesURL) 
    let movies = await res.json()
    setPopular(movies.results)
  }
  
  const fetchTopMovies = async () => {
    let res = await fetch(topMoviesURL) 
    let movies = await res.json()
    setTop(movies.results)
  }

  useEffect(() => { 
    fetchPopularMovies()
    fetchTopMovies()
  })

  // useEffect(() => { 
  //   fetch(popularMoviesURL)
  //   .then((res) => res.json())
  //   .then((data) => setPopular(data.results) )
  // })

  return (
      <ScrollView style={style.screenContainer}>
        <Navbar />
        <HomePageTitle headerTitle='Movies' />
        <MovieRowList title='Popular' data={popular} />
        <MovieRowList title='Top Rated' data={top} />
      </ScrollView>
  );
}

const style = StyleSheet.create({
  screenContainer: {
    padding: 10,
  },
})

export default MoviesHome
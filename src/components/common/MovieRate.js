import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import movieDetails from '../../utils/movieDetails.json'

const rate = movieDetails.vote_average

const MovieRate = () => {
  return (
  	<View style={{ flexDirection: 'row', paddingTop: 10, paddingRight: 10  }}>
		<FontAwesomeIcon style={{ color: '#FFD700' }} icon={faStar} />
		<FontAwesomeIcon style={{ color: '#FFD700' }} icon={faStar} />
		<FontAwesomeIcon style={{ color: '#FFD700' }} icon={faStar} />
		<FontAwesomeIcon style={{ color: '#FFD700' }} icon={faStar} />
		<FontAwesomeIcon style={{ color: '#FFF' }} icon={faStar} />
        <Text style={{ color: '#DDD', paddingLeft: 10 }}>{rate}</Text>
    </View>
  );
}

export default MovieRate
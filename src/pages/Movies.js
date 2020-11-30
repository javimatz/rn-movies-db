import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import HeaderTitle from '../components/common/HeaderTitle';
import BackButton from '../components/common/BackButton';
import MovieCardList from '../components/Movies/MovieCardList';

const style = StyleSheet.create({
  
})

const Movies = () => {
  return (
  	<View>
  		<View 
        style={{ 
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: 20
      }}>
          <BackButton />
          <View style={{ paddingLeft: 20 }}>
          <HeaderTitle 
    	    	headerTitle='Must Watch TV Show' 
    	    />
          </View>
  		</View>
      <MovieCardList />
    </View>
  );
}

export default Movies
import React, { Fragment } from 'react';
import { FlatList, Image, StyleSheet, Text, View, } from 'react-native';

const style = StyleSheet.create({
  img: {
    borderRadius: 10,
    height: 100,
    marginTop: 10,
    marginRight: 10,
    width: 80,
  },
  imgContainer: {
    
  }
})

const CastingList = ({title, data, imageWithTitle}) => {

  // Images API
  const url = 'https://image.tmdb.org/t/p/w500/'
  return (
  	<View>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
	  	<FlatList
  		  data={data}
  		  renderItem={ ({item}) => {		    
            return (
              <View style={style.imgContainer}>
                <Image source={{ uri: url.concat(item.profile_path) }} style={style.img} /> 
              </View>
            )
          	}}
  		  keyExtractor={ (item) => item.id.toString()}
  		  horizontal
  		/>
  	</View>
  );
}

export default CastingList
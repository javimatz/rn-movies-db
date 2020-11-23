import React, { Fragment } from 'react';
import { FlatList, Image, StyleSheet, Text, View, } from 'react-native';

const style = StyleSheet.create({
  listTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 5,
    paddingTop: 20,
  },
  img: {
    borderRadius: 10,
    height: 200,
    margin: 5,
    width: 120,
  },
  imgContainer: {
    width: 130,
  }
})

const ImageCard = ({title, data, imageWithTitle}) => {

  // Images API
  const url = 'https://image.tmdb.org/t/p/w500/'
  let path = ''
  let imgTitle = ''
  return (
  	<View style={style.imgContainer}>
	    <Image source={{ uri: url.concat(path) }} style={style.img} /> 
	    {  
	      (imageWithTitle && imgTitle) && <Text>{imgTitle}</Text>
	    }
	</View>
  );
}

export default ImageCard
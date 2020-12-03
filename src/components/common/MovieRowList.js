import React, { Fragment } from 'react';
import { FlatList, Image, StyleSheet, Text, View, } from 'react-native';
import CardListMenu from './CardListMenu'

const style = StyleSheet.create({
  img: {
    borderRadius: 10,
    height: 200,
    width: 120,
  },
  imgContainer: {
    width: 130,
  }
})

const MovieRowList = ({title, data, imageWithTitle}) => {

  // Images API
  const url = 'https://image.tmdb.org/t/p/w500/'
  return (
  	<View style={{ paddingVertical: 15 }}>
      <CardListMenu title={title} />
	  	<FlatList
  		  data={data}
  		  renderItem={ ({item}) => {		    
            return (
              <View style={style.imgContainer}>
                <Image source={{ uri: url.concat(item.poster_path) }} style={style.img} /> 
                {imageWithTitle && <Text>{item.title}</Text>}
              </View>
            )
          }
  		  }
  		  keyExtractor={ (item) => item.id.toString()}
  		  horizontal
  		/>
  	</View>
  );
}

export default MovieRowList
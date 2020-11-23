import React, { Fragment } from 'react';
import { FlatList, Image, StyleSheet, Text, View, } from 'react-native';
import CardListMenu from './CardListMenu'

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

const ImageCardList = ({title, data, imageWithTitle}) => {

  // Images API
  const url = 'https://image.tmdb.org/t/p/w500/'
  let path = ''
  let imgTitle = ''
  return (
  	<View>
      <CardListMenu />
	  	<Text style={style.listTitle} >{title}</Text>
  		<FlatList
  		  data={data}
  		  renderItem={ ({item}) => {		    
          
            item.poster_path && (path = item.poster_path)
            item.profile_path && (path = item.profile_path)
            item.file_path && (path = item.profile_path)
            
            item.original_name && (imgTitle = item.original_name)
            item.original_title && (imgTitle = item.original_title)

            return (
              <View style={style.imgContainer}>
                <Image source={{ uri: url.concat(path) }} style={style.img} /> 
                {  
                  (imageWithTitle && imgTitle) && <Text>{imgTitle}</Text>
                }
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

export default ImageCardList
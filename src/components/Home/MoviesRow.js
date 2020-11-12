import React from "react";
import PropTypes, { object } from "prop-types";
import { View, Text, FlatList, StyleSheet, TouchableNativeFeedback } from "react-native";

import MoviePoster from "../MoviePoster";

const MoviesRow = ({ data, title, navigation, type }) => {
  return (
    <View>
      <View>
        <Text>{title}</Text>
        <TouchableNativeFeedback onPress={() => navigation.navigate("Movielist", { data, type, title })}>
          <Text>More</Text>
        </TouchableNativeFeedback>
      </View>
      <FlatList
        data={data}
        horizontal
        renderItem={({ item }) => <MoviePoster item={item} navigation={navigation} type={type} />}
        keyExtractor={(item) => item.id.toString()}
        style={{ margin: 8, marginTop: 4 }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default MoviesRow;

MoviesRow.propTypes = {
  data: PropTypes.arrayOf(object),
  title: PropTypes.string,
  navigation: PropTypes.object,
  type: PropTypes.oneOf(["tv", "movie"]),
};

MoviesRow.defaultProps = {
  data: [
    { id: 1, data: "1" },
    { id: 2, data: "2" },
    { id: 3, data: "3" },
    { id: 4, data: "4" },
  ],
};
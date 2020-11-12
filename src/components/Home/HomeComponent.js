import React, { Component } from "react";
import PropTypes, { string, object } from "prop-types";
import { ScrollView, Text, View, StyleSheet, RefreshControl } from "react-native";

import Screen from "../Screen.js";
import MoviesRow from "./MoviesRow";
import HomeHeader from "./HomeHeader";

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false,
    };
  }

  onRefresh = async () => {
    this.setState({ isRefreshing: true });
    await this.props.onRefresh();
    this.setState({ isRefreshing: false });
  };

  renderHeader = () => {
    const { navigation, type } = this.props;
    return <HomeHeader navigation={navigation} type={type} />;
  };

  renderTitle = () => {
    const { type } = this.props;
    const title = type === "tv" ? "TV Shows" : "Movies";
    return (
      <View>
        <Text>{title}</Text>
        <View />
      </View>
    );
  };

  renderMovieRow = () => {
    const { navigation, data, subTitle, type } = this.props;
    return subTitle.map((title, index) => (
      <MoviesRow key={index} data={{ ...data[index] }.results} title={title} navigation={navigation} type={type} />
    ));
  };

  renderMoviesComponent = () => {
    const { isRefreshing } = this.state;
    return (
      <ScrollView
        refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={this.onRefresh} />}
        showsVerticalScrollIndicator={false}
      >
        {this.renderTitle()}
        {this.renderMovieRow()}
      </ScrollView>
    );
  };

  render() {
    return (
      <Screen>
        {this.renderHeader()}
        {this.renderMoviesComponent()}
      </Screen>
    );
  }
}

export default HomeComponent;

HomeComponent.propTypes = {
  navigation: PropTypes.object,
  type: PropTypes.oneOf(["tv", "movie"]),
  data: PropTypes.arrayOf(object),
  onRefresh: PropTypes.func,
  subTitle: PropTypes.arrayOf(string),
};

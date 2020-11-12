import React from "react";
import PropTypes from "prop-types";
import { StatusBar, View, SafeAreaView, Platform, StyleSheet } from "react-native";

import { getStatusBarHeight } from "react-native-status-bar-height";

const Screen = ({ children }) => {
  return (
    <View>
        <StatusBar barStyle="dark-content" translucent />
        {children}
    </View>
  );
};

export default Screen;

Screen.propTypes = {
  children: PropTypes.any.isRequired,
};
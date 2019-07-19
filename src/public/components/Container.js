import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import color from "../config/color.json";

const Container = props => (
  <SafeAreaView style={styles.container}>{props.children}</SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.backgroundContainer
  }
});

export default Container;

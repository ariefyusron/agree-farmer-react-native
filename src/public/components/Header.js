import React from "react";
import { View, TouchableHighlight, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { Container } from ".";
import color from "../config/color.json";

const Header = ({ navigation }) => (
  <SafeAreaView>
    <View style={{ height: 70, width: "100%", backgroundColor: "#fff" }}>
      <TouchableHighlight
        style={{
          justifyContent: "center",
          height: "100%",
          width: "15%",
          alignItems: "center"
        }}
        onPress={() => navigation.goBack()}
        underlayColor="#f4f4f4"
      >
        <Icon name="chevron-left" size={30} color={color.green} />
      </TouchableHighlight>
    </View>
  </SafeAreaView>
);

export default Header;

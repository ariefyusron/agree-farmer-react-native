import React from "react";
import { View, TouchableHighlight, SafeAreaView, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IconIonicons from "react-native-vector-icons/Ionicons";

import color from "../../public/config/color.json";

const Header = ({ navigation }) => (
  <SafeAreaView style={{ backgroundColor: color.green }}>
    <View
      style={{
        height: 70,
        width: "100%",
        flexDirection: "row"
      }}
    >
      <TouchableHighlight
        style={{
          justifyContent: "center",
          height: "100%",
          width: "15%",
          alignItems: "center"
        }}
        onPress={() => navigation.goBack()}
        underlayColor="rgba(0,0,0,0.1)"
      >
        <Icon name="chevron-left" size={30} color="#fff" />
      </TouchableHighlight>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
          {navigation.getParam("title")}
        </Text>
      </View>
      <TouchableHighlight
        style={{
          justifyContent: "center",
          height: "100%",
          width: "15%",
          alignItems: "center"
        }}
        onPress={() => navigation.goBack()}
        underlayColor="rgba(0,0,0,0.1)"
      >
        <IconIonicons name="ios-search" size={25} color="#fff" />
      </TouchableHighlight>
    </View>
  </SafeAreaView>
);

export default Header;

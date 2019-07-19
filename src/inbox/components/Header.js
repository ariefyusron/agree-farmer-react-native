import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import color from "../../public/config/color.json";

const Header = () => (
  <View
    style={{
      height: 70,
      backgroundColor: color.green,
      alignItems: "center"
    }}
  >
    <View
      style={{
        width: "100%",
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <View style={{ paddingLeft: "5%" }}>
        <Text style={{ color: "#fff", fontSize: 20 }}>Inbox</Text>
      </View>
      <TouchableHighlight
        style={{
          height: "100%",
          justifyContent: "center",
          paddingHorizontal: "5%"
        }}
        underlayColor="rgba(0,0,0,0.1)"
        onPress={() => alert("Halo")}
      >
        <Icon name="sort-variant" color="#fff" size={25} />
      </TouchableHighlight>
    </View>
  </View>
);

export default Header;

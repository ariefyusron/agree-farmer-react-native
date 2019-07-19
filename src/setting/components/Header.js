import React from "react";
import { View, Text } from "react-native";

import color from "../../public/config/color.json";

const Header = () => (
  <View
    style={{
      height: 80,
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
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
          Pengaturan
        </Text>
      </View>
    </View>
  </View>
);

export default Header;

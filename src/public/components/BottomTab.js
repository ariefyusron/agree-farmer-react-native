import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import color from "../config.js/color.json";

const BottomTab = props => (
  <View style={{ backgroundColor: "#fff", height: 80, flexDirection: "row" }}>
    {console.log(props)}
    <TouchableHighlight
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      onPress={() => props.jumpTo("Home")}
      underlayColor="#f4f4f4"
    >
      <>
        <Icon
          name="home-outline"
          size={28}
          color={props.navigation.state.index === 0 ? color.green : "#818181"}
        />
        <Text style={{ color: "#818181" }}>Home</Text>
      </>
    </TouchableHighlight>
    <TouchableHighlight
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      onPress={() => props.jumpTo("Inbox")}
      underlayColor="#f4f4f4"
    >
      <>
        <Icon
          name="email-outline"
          size={28}
          color={props.navigation.state.index === 1 ? color.green : "#818181"}
        />
        <Text style={{ color: "#9f9f9f" }}>Inbox</Text>
      </>
    </TouchableHighlight>
    <TouchableHighlight
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      onPress={() => props.jumpTo("Setting")}
      underlayColor="#f4f4f4"
    >
      <>
        <Icon
          name="settings-outline"
          size={28}
          color={props.navigation.state.index === 2 ? color.green : "#818181"}
        />
        <Text style={{ color: "#9f9f9f" }}>Pengaturan</Text>
      </>
    </TouchableHighlight>
  </View>
);

export default BottomTab;

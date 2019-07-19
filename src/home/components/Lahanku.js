import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import color from "../../public/config/color.json";

const Lahanku = () => (
  <View style={{ width: "100%", alignItems: "center", paddingVertical: 5 }}>
    <View
      style={{
        width: "90%",
        backgroundColor: "#fff",
        borderRadius: 5,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 1
      }}
    >
      <View
        style={{
          backgroundColor: color.green,
          height: 5,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10
        }}
      />
      <View
        style={{
          borderBottomColor: "#dbdbdb",
          borderBottomWidth: 1,
          paddingVertical: 10,
          alignItems: "center"
        }}
      >
        <View
          style={{ flexDirection: "row", width: "80%", alignItems: "center" }}
        >
          <Icon name="flower-tulip-outline" color={color.green} size={25} />
          <Text style={{ color: color.green, marginLeft: 10 }}>Lahanku</Text>
        </View>
      </View>
      <View
        style={{ width: "100%", alignItems: "center", paddingVertical: 20 }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "80%",
            justifyContent: "space-between"
          }}
        >
          <View>
            <Text style={{ color: "#c0c0c0", marginBottom: 5 }}>
              Luas Lahan (ha)
            </Text>
            <Text
              style={{ color: "#636363", fontWeight: "bold", fontSize: 18 }}
            >
              1736
            </Text>
          </View>
          <View>
            <Text style={{ color: "#c0c0c0", marginBottom: 5 }}>
              Realisasi Tanam (ha)
            </Text>
            <Text
              style={{ color: "#636363", fontWeight: "bold", fontSize: 18 }}
            >
              287.15
            </Text>
          </View>
        </View>
      </View>
    </View>
  </View>
);

export default Lahanku;

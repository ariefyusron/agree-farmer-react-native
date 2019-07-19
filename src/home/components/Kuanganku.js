import React from "react";
import { View, Text } from "react-native";

import color from "../../public/config.js/color.json";

const Kuanganku = () => (
  <View style={{ width: "100%", alignItems: "center", paddingVertical: 5 }}>
    <View style={{ width: "90%", backgroundColor: "#fff", borderRadius: 5 }}>
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
        <View style={{ flexDirection: "row", width: "80%" }}>
          <Text
            style={{
              color: color.green
            }}
          >
            ic
          </Text>
          <Text style={{ color: color.green, marginLeft: 10 }}>Keuanganku</Text>
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
              Pendapatan (Rp)
            </Text>
            <Text
              style={{ color: "#636363", fontWeight: "bold", fontSize: 18 }}
            >
              263.883.000
            </Text>
          </View>
          <View>
            <Text style={{ color: "#c0c0c0", marginBottom: 5 }}>
              Kredit (Rp)
            </Text>
            <Text
              style={{ color: "#636363", fontWeight: "bold", fontSize: 18 }}
            >
              6.778.039.953
            </Text>
          </View>
        </View>
      </View>
    </View>
  </View>
);

export default Kuanganku;

import React from "react";
import { View, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import color from "../../public/config/color.json";

const Profile = () => (
  <View style={{ alignItems: "center", paddingVertical: 30 }}>
    <View style={{ flexDirection: "row", width: "70%" }}>
      <View
        style={{
          height: 90,
          width: 90,
          borderRadius: 90 / 2,
          backgroundColor: color.backgroundContainer,
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.3,
          shadowRadius: 3
        }}
      >
        <Image
          source={{
            uri:
              "https://images.theconversation.com/files/259351/original/file-20190216-56243-7v29kw.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C998%2C667&q=45&auto=format&w=496&fit=clip"
          }}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 90 / 2
          }}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          flex: 1,
          paddingLeft: 20
        }}
      >
        <View style={{ marginBottom: 10 }}>
          <Text
            style={{
              fontSize: 14,
              color: color.green,
              marginBottom: 3
            }}
          >
            Selamat siang,
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: color.green
            }}
          >
            Rama Chaniago
          </Text>
        </View>
        <View
          style={{
            backgroundColor: color.green,
            paddingVertical: 5,
            borderRadius: 20,
            alignItems: "center",
            width: "50%",
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <Icon name="trophy" color="#f9d321" size={16} />
          <Text style={{ color: "#fff", marginLeft: 5 }}>-</Text>
        </View>
      </View>
    </View>
  </View>
);

export default Profile;

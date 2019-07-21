import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { Container } from "../../public/components";
import { Header } from "../components";
import color from "../../public/config/color.json";

class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container style={{ backgroundColor: color.green }}>
        <ScrollView style={styles.container}>
          <Header />
          <View>
            <View
              style={{
                padding: 20,
                borderBottomColor: "#dbdbdb",
                borderBottomWidth: 1
              }}
            >
              <Text style={{ fontWeight: "bold", color: "#636363" }}>
                Tentang
              </Text>
              <View style={{ marginTop: 10 }}>
                <Text style={{ color: "#636363" }}>FAQ</Text>
              </View>
            </View>
            <View
              style={{
                padding: 20,
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <Icon name="logout" size={20} color={color.green} />
              <View style={{ paddingLeft: 5 }}>
                <Text style={{ color: "#636363" }}>Keluar</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default Setting;

import React, { Component } from "react";
import { View, Text, ScrollView, RefreshControl } from "react-native";

import { Container } from "../../public/components";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = { refreshing: false };
  }

  onRefresh = async () => {
    await this.setState({ refreshing: true });
    setTimeout(() => this.setState({ refreshing: false }), 1000);
  };

  render() {
    return (
      <Container style={{ backgroundColor: "#fff" }}>
        <ScrollView
          style={{ backgroundColor: "#fff" }}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
            />
          }
        >
          <View style={{ paddingHorizontal: "6%", marginTop: 20 }}>
            <Text style={{ fontWeight: "bold", color: "#636363" }}>
              Subject: Info Harga
            </Text>
          </View>
          <View style={{ paddingHorizontal: "6%", paddingVertical: 30 }}>
            <View
              style={{
                backgroundColor: "rgba(28, 165, 80, 0.5)",
                padding: 5
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>agree</Text>
            </View>
          </View>
          <View style={{ paddingHorizontal: "6%" }}>
            <View>
              <Text style={{ color: "#636363", fontSize: 13 }}>
                Info harga terbaru untuk:
              </Text>
            </View>
            <View style={{ paddingHorizontal: "7%", marginVertical: 7 }}>
              <View
                style={{
                  flexDirection: "row",
                  borderBottomColor: "#636363",
                  borderBottomWidth: 1,
                  paddingVertical: 15
                }}
              >
                <View style={{ flex: 1 }}>
                  <Text style={{ color: "#636363", fontSize: 13 }}>
                    Komoditas
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: "#636363", fontSize: 13 }}>Jahe</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  borderBottomColor: "#636363",
                  borderBottomWidth: 1,
                  paddingVertical: 15
                }}
              >
                <View style={{ flex: 1 }}>
                  <Text style={{ color: "#636363", fontSize: 13 }}>
                    Varietas
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: "#636363", fontSize: 13 }}>Aster</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  borderBottomColor: "#636363",
                  borderBottomWidth: 1,
                  paddingVertical: 15
                }}
              >
                <View style={{ flex: 1 }}>
                  <Text style={{ color: "#636363", fontSize: 13 }}>
                    Harga/kg
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: "#636363", fontSize: 13 }}>
                    Rp 1.400
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

export default Message;

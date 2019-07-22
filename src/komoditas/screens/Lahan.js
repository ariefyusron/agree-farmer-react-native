import React, { Component } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  SectionList,
  RefreshControl,
  Alert
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import color from "../../public/config/color.json";
import { Container } from "../../public/components";

class Lahan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false
    };
  }

  onRefresh = async () => {
    await this.setState({ refreshing: true });
    setTimeout(() => this.setState({ refreshing: false }), 1000);
  };

  renderHeader = () => (
    <View
      style={{
        backgroundColor: color.green,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 3
      }}
    >
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: "5%",
          paddingVertical: 10
        }}
      >
        <View
          style={{
            width: 80,
            height: 80,
            borderRadius: 5,
            backgroundColor: color.backgroundContainer
          }}
        >
          <Image
            source={{
              uri: "https://indoprogress.com/wp-content/uploads/2018/04/1-8.jpg"
            }}
            style={{ width: "100%", height: "100%", borderRadius: 5 }}
          />
        </View>
        <View
          style={{
            flex: 1,
            paddingHorizontal: "4%",
            justifyContent: "space-between"
          }}
        >
          <View>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>
              Pinky Chaniago
            </Text>
          </View>
          <View>
            <Text style={{ color: "#fff", fontSize: 12 }}>NIK</Text>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 12 }}>
              324168767878
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: "5%",
          paddingVertical: 15
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ color: "#fff", marginBottom: 3 }}>Lahan Ditanam</Text>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>
            57.4 ha/90 ha
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ color: "#fff", marginBottom: 3 }}>Hasil Produksi</Text>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>0 kg</Text>
        </View>
      </View>
    </View>
  );

  renderItem = ({ item }) => (
    <TouchableHighlight
      style={{
        backgroundColor: "#fff",
        padding: 20,
        borderBottomColor: "#636363",
        borderBottomWidth: 0.3
      }}
      onPress={() => this.props.navigation.navigate("Lahan")}
      underlayColor="#f4f4f4"
    >
      <View style={{ flexDirection: "row", flex: 1 }}>
        <View
          style={{
            backgroundColor: "rgba(28, 165, 80, 0.5)",
            width: 80,
            height: 80,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ color: "#fff" }}>2 ha</Text>
        </View>
        <View
          style={{
            alignItems: "center",
            flex: 1,
            paddingLeft: 20,
            flexDirection: "row"
          }}
        >
          <View style={{ flex: 1 }}>
            <View style={{ marginBottom: 10 }}>
              <Text
                style={{
                  color: "#c0c0c0",
                  fontSize: 12,
                  marginBottom: 3
                }}
              >
                ID Lahan
              </Text>
              <Text style={{ color: "#636363", fontSize: 12 }}>
                A21768767868
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between"
              }}
            >
              <View>
                <Text
                  style={{
                    color: "#c0c0c0",
                    fontSize: 12,
                    marginBottom: 3
                  }}
                >
                  Varietas
                </Text>
                <Text style={{ color: "#636363", fontSize: 12 }}>-</Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <View style={{ marginBottom: 10 }}>
              <Text
                style={{
                  color: "#c0c0c0",
                  fontSize: 12,
                  marginBottom: 3
                }}
              >
                Lokasi
              </Text>
              <Text style={{ color: "#636363", fontSize: 12 }}>Bukit</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between"
              }}
            >
              <View>
                <Text
                  style={{
                    color: "#c0c0c0",
                    fontSize: 12,
                    marginBottom: 3
                  }}
                >
                  Tanggal Tanam
                </Text>
                <Text style={{ color: "#636363", fontSize: 12 }}>-</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <Container style={{ backgroundColor: "#fff" }}>
        <SectionList
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
            />
          }
          sections={[
            { title: "", data: [""], renderItem: this.renderHeader },
            {
              title: "",
              data: [""],
              renderItem: this.renderItem
            }
          ]}
          keyExtractor={(item, index) => item + index}
        />
        <TouchableHighlight
          style={{
            backgroundColor: color.green,
            width: 60,
            height: 60,
            borderRadius: 60 / 2,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: 30,
            right: 30
          }}
          onPress={() => Alert.alert("Button Add")}
          underlayColor="rgba(28, 165, 80, 0.5)"
        >
          <Icon color="#fff" name="ios-add" size={35} />
        </TouchableHighlight>
      </Container>
    );
  }
}

export default Lahan;

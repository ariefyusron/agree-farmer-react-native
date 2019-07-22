import React, { Component } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  SectionList,
  RefreshControl
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import color from "../../public/config/color.json";
import { Container } from "../../public/components";

class Komuditas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      data: [
        {
          title: "Pinky Chaniago",
          lahan: "60.41 ha / 90 ha",
          image: "https://indoprogress.com/wp-content/uploads/2018/04/1-8.jpg"
        },
        {
          title: "Pinky Chaniago",
          lahan: "5.01 ha / 27 ha",
          image: "https://indoprogress.com/wp-content/uploads/2018/04/1-8.jpg"
        },
        {
          title: "Pinky Chaniago",
          lahan: "56 ha / 100 ha",
          image: "https://indoprogress.com/wp-content/uploads/2018/04/1-8.jpg"
        }
      ]
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
        flexDirection: "row",
        paddingHorizontal: "5%",
        paddingTop: 15,
        paddingBottom: 25,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 3
      }}
    >
      <View style={{ flex: 1 }}>
        <Text style={{ color: "#fff", marginBottom: 3 }}>Lahan Ditanam</Text>
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          116..41 ha/217 ha
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ color: "#fff", marginBottom: 3 }}>Hasil Produksi</Text>
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          5260 kg/5555500 kg
        </Text>
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
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <View
            style={{
              backgroundColor: "#f4f4f4",
              width: 80,
              height: 80,
              borderRadius: 5
            }}
          >
            <Image
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 5
              }}
              source={{
                uri: item.image
              }}
            />
          </View>
          <View
            style={{
              justifyContent: "center",
              flex: 1
            }}
          >
            <View style={{ paddingLeft: 20 }}>
              <View style={{ marginBottom: 10 }}>
                <Text
                  style={{
                    color: "#636363"
                  }}
                >
                  {item.title}
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
                    Lahan ditanami
                  </Text>
                  <Text style={{ color: "#636363", fontSize: 12 }}>
                    {item.lahan}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            width: "15%",
            justifyContent: "center",
            alignItems: "flex-end"
          }}
        >
          <Icon name={"chevron-right"} color="#bbbbbb" size={25} />
        </View>
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <Container>
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
              data: this.state.data,
              renderItem: this.renderItem
            }
          ]}
          keyExtractor={(item, index) => item + index}
        />
      </Container>
    );
  }
}

export default Komuditas;

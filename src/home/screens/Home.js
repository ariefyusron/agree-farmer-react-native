import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  SectionList,
  RefreshControl
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { Container } from "../../public/components";
import { Profile, Keuanganku, Lahanku } from "../components";
import color from "../../public/config/color.json";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      data: [
        {
          title: "Akar Wangi",
          image: "https://indoprogress.com/wp-content/uploads/2018/04/1-8.jpg",
          target: "555500",
          realisasi: "5230"
        },
        {
          title: "Cengkeh",
          image:
            "https://perkebunannews.com/wp-content/uploads/2016/04/Tanaman-Cengkeh-595x445.jpg",
          target: "0",
          realisasi: "5230"
        },
        {
          title: "Jahe",
          image:
            "https://media.suara.com/pictures/653x366/2018/03/01/89083-menghilangkan-bau-badan-dengan-jahe.jpg",
          target: "0",
          realisasi: "5230"
        },
        {
          title: "Nilam",
          image:
            "https://cdn1-production-images-kly.akamaized.net/JQ1DJHgUwLbQnMLPzy9G6PWtRvc=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2760211/original/087466000_1553488543-Daun_Nilam.jpg",
          target: "0",
          realisasi: "5230"
        },
        {
          title: "Sereh Wangi",
          image:
            "https://ecs7.tokopedia.net/img/cache/700/product-1/2017/7/3/15617108/15617108_e966759d-a20f-4b54-b88b-bcd4732e4567_1537_2049.jpg",
          target: "0",
          realisasi: "5230"
        }
      ]
    };
  }

  onRefresh = async () => {
    await this.setState({ refreshing: true });
    setTimeout(() => this.setState({ refreshing: false }), 1000);
  };

  renderItem = ({ item, index }) => (
    <View
      style={{
        width: "100%",
        alignItems: "center",
        paddingVertical: 5,
        marginBottom: this.state.data.length - 1 === index ? 10 : 0
      }}
    >
      <View style={{ width: "90%" }}>
        {index === 0 ? (
          <View style={{ marginVertical: 10 }}>
            <Text
              style={{ color: "#666666", fontWeight: "bold", fontSize: 16 }}
            >
              Komoditasku
            </Text>
          </View>
        ) : null}
        <View
          style={{
            backgroundColor: "#fff",
            borderRadius: 5,
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.1,
            shadowRadius: 1
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "row", flex: 1 }}>
              <View
                style={{
                  backgroundColor: "#f4f4f4",
                  width: 90,
                  height: 110,
                  borderBottomLeftRadius: 5,
                  borderTopLeftRadius: 5
                }}
              >
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    borderBottomLeftRadius: 5,
                    borderTopLeftRadius: 5
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
                        color: color.green,
                        fontSize: 16,
                        fontWeight: "bold"
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
                          fontSize: 13,
                          marginBottom: 3
                        }}
                      >
                        Target (kg)
                      </Text>
                      <Text style={{ color: "#636363" }}>{item.target}</Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          color: "#c0c0c0",
                          fontSize: 13,
                          marginBottom: 3
                        }}
                      >
                        Realisasi (kg)
                      </Text>
                      <Text style={{ color: "#636363" }}>{item.realisasi}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                width: "15%",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Icon name={"chevron-right"} color="#bbbbbb" size={25} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );

  render() {
    return (
      <Container>
        <View style={styles.container}>
          <SectionList
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh}
              />
            }
            sections={[
              { title: "", data: [""], renderItem: Profile },
              { title: "", data: [""], renderItem: Keuanganku },
              { title: "", data: [""], renderItem: Lahanku },
              {
                title: "",
                data: this.state.data,
                renderItem: this.renderItem
              }
            ]}
            keyExtractor={(item, index) => item + index}
          />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Home;

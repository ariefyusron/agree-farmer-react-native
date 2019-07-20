import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  RefreshControl,
  Modal,
  Animated,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
  FlatList
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { Container } from "../../public/components";
import { Header } from "../components";
import color from "../../public/config/color.json";

class Inbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalValue: new Animated.Value(Dimensions.get("window").height),
      modalVisible: false,
      backgroundModalVisible: false,
      refreshing: false,
      activeFilter: [],
      filter: [
        "Inside",
        "Rekomendasi Panen",
        "Transaksi",
        "Rencana Panen",
        "Info Harga"
      ],
      data: [
        {
          title: "Info Harga",
          content: "Info harga terbaru untuk jahe",
          date: "18 Jul 2019",
          time: "15:28",
          read: true
        },
        {
          title: "Info Harga",
          content: "Info harga terbaru untuk jahe",
          date: "18 Jul 2019",
          time: "15:28",
          read: false
        },
        {
          title: "Info Harga",
          content: "Info harga terbaru untuk jahe",
          date: "18 Jul 2019",
          time: "15:28",
          read: true
        },
        {
          title: "Info Harga",
          content: "Info harga terbaru untuk jahe",
          date: "17 Jul 2019",
          time: "15:28",
          read: true
        },
        {
          title: "Info Harga",
          content: "Info harga terbaru untuk jahe",
          date: "16 Jul 2019",
          time: "15:28",
          read: true
        },
        {
          title: "Info Harga",
          content: "Info harga terbaru untuk jahe",
          date: "16 Jul 2019",
          time: "15:28",
          read: true
        },
        {
          title: "Info Harga",
          content: "Info harga terbaru untuk jahe",
          date: "15 Jul 2019",
          time: "15:28",
          read: true
        },
        {
          title: "Info Harga",
          content: "Info harga terbaru untuk jahe",
          date: "15 Jul 2019",
          time: "15:28",
          read: false
        },
        {
          title: "Info Harga",
          content: "Info harga terbaru untuk jahe",
          date: "15 Jul 2019",
          time: "15:28",
          read: true
        },
        {
          title: "Info Harga",
          content: "Info harga terbaru untuk jahe",
          date: "15 Jul 2019",
          time: "15:28",
          read: true
        },
        {
          title: "Info Harga",
          content: "Info harga terbaru untuk jahe",
          date: "15 Jul 2019",
          time: "15:28",
          read: true
        }
      ]
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({
      scrollToTop: this.scrollToTop
    });
  }

  scrollToTop = () => {
    this.list.scrollToLocation({ sectionIndex: 0, itemIndex: 0 });
  };

  onRefresh = async () => {
    await this.setState({ refreshing: true });
    setTimeout(() => this.setState({ refreshing: false }), 1000);
  };

  async hanldeModal() {
    await this.setState({ modalVisible: true });
    Animated.timing(this.state.modalValue, {
      toValue: 0,
      duration: 200
    }).start();
  }

  hanldeModalFalse() {
    this.setState({
      modalVisible: false,
      modalValue: new Animated.Value(Dimensions.get("window").height)
    });
  }

  activeFilter(index) {
    if (!this.state.activeFilter.includes(index)) {
      this.setState({ activeFilter: [...this.state.activeFilter, index] });
    } else {
      this.setState({
        activeFilter: this.state.activeFilter.filter(item => item !== index)
      });
    }
  }

  renderHeader = () => <Header handleVisible={() => this.hanldeModal()} />;

  renderItem = ({ item, index }) => (
    <View>
      {item.date !== this.state.data[index === 0 ? index : index - 1].date ||
      index === 0 ? (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 10
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "#636363",
              height: 2,
              opacity: 0.5
            }}
          />
          <View style={{ paddingHorizontal: 15 }}>
            <Text style={{ color: "#9f9f9f", fontWeight: "bold" }}>
              {item.date}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: "#636363",
              height: 2,
              opacity: 0.5
            }}
          />
        </View>
      ) : null}
      <View
        style={[
          {
            borderBottomColor: "#dbdbdb",
            borderBottomWidth: 1,
            borderTopColor: "#dbdbdb",
            borderTopWidth: 1,
            padding: 15,
            flexDirection: "row"
          },
          !item.read ? { backgroundColor: "rgba(28, 165, 80, 0.5)" } : null
        ]}
      >
        <View
          style={[
            {
              height: 45,
              width: 45,
              borderRadius: 45 / 2,
              justifyContent: "center",
              alignItems: "center"
            },
            item.read ? { backgroundColor: color.green, opacity: 0.5 } : null
          ]}
        >
          <Icon
            name={item.read ? "email-open-outline" : "email-outline"}
            color="#fff"
            size={33}
            style={{ marginTop: 5 }}
          />
        </View>
        <View
          style={{
            paddingLeft: 15,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            flex: 1
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 12,
                color: "#636363",
                fontWeight: "bold",
                marginBottom: 3
              }}
            >
              {item.title}
            </Text>
            <Text style={{ fontSize: 12, color: "#636363" }}>
              {item.content}
            </Text>
          </View>
          <View>
            <Text style={{ color: "#636363", fontWeight: "bold" }}>
              {item.time}
            </Text>
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
            ref={list => {
              this.list = list;
            }}
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
        </View>

        <Modal
          transparent
          visible={this.state.modalVisible}
          animationType="fade"
        >
          <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }}>
            <Animated.View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginTop: this.state.modalValue
              }}
            >
              <View style={{ width: "90%", alignItems: "flex-end" }}>
                <TouchableOpacity
                  onPress={() => this.hanldeModalFalse()}
                  style={{ padding: 10 }}
                >
                  <Icon name="close" color="#fff" size={25} />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  backgroundColor: "#fff",
                  width: "90%",
                  shadowOffset: { width: 0, height: 0 },
                  shadowOpacity: 0.1,
                  shadowRadius: 1
                }}
              >
                <View
                  style={{
                    paddingVertical: 20,
                    alignItems: "center",
                    borderBottomColor: "#000",
                    borderBottomWidth: 0.5
                  }}
                >
                  <Text>FILTER</Text>
                </View>
                <View style={{ height: 200 }}>
                  <FlatList
                    data={this.state.filter}
                    extraData={this.state}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                      <TouchableOpacity
                        style={{
                          paddingHorizontal: "7%",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                          paddingVertical: 5,
                          marginTop: index === 0 ? 10 : 0
                        }}
                        onPress={() => this.activeFilter(index)}
                      >
                        <Text>{item}</Text>
                        {!this.state.activeFilter.includes(index) ? (
                          <Icon
                            name="checkbox-blank-outline"
                            size={20}
                            color="#9f9f9f"
                          />
                        ) : (
                          <Icon
                            name="check-box-outline"
                            size={20}
                            color={color.green}
                          />
                        )}
                      </TouchableOpacity>
                    )}
                  />
                </View>
                <TouchableHighlight
                  style={{
                    paddingVertical: 20,
                    alignItems: "center",
                    backgroundColor: "#000"
                  }}
                  onPress={() => this.hanldeModalFalse()}
                  underlayColor="rgba(0,0,0,0.9)"
                >
                  <Text style={{ color: "#fff" }}>SUBMIT FILTER</Text>
                </TouchableHighlight>
              </View>
            </Animated.View>
          </View>
        </Modal>
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

export default Inbox;

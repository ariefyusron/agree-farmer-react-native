import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  RefreshControl
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { Container } from "../../public/components";
import { Header } from "../components";
import color from "../../public/config/color.json";

class Inbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      backgroundModalVisible: false,
      refreshing: false,
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

  renderHeader = () => <Header />;

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

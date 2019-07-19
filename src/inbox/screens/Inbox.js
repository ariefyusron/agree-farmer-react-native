import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Container } from "../../public/components";
import { Header } from "../components";

class Inbox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Header />
        <View style={styles.container}>
          <Text>Inbox</Text>
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

export default Inbox;

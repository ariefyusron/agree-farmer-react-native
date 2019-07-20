import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import BottomTabs from "./BottomTabs";
import Message from "../../inbox/screens/Message";
import { Header } from "../components";

const appStack = createStackNavigator(
  {
    BottomTabs: {
      screen: BottomTabs,
      navigationOptions: {
        header: null
      }
    },
    Message
  },
  {
    headerMode: "screen",
    defaultNavigationOptions: props => ({
      header: <Header {...props} />
    })
  }
);

export default createAppContainer(appStack);

import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import BottomTabs from "./BottomTabs";
import Message from "../../inbox/screens/Message";
import { Header } from "../components";
import Komuditas from "../../komoditas/screens/Komuditas";
import { HeaderKomuditas } from "../../komoditas/components";

const appStack = createStackNavigator(
  {
    BottomTabs: {
      screen: BottomTabs,
      navigationOptions: {
        header: null
      }
    },
    Message,
    Komuditas: {
      screen: Komuditas,
      navigationOptions: props => ({
        header: <HeaderKomuditas {...props} />
      })
    }
  },
  {
    headerMode: "screen",
    defaultNavigationOptions: props => ({
      header: <Header {...props} />
    })
  }
);

export default createAppContainer(appStack);

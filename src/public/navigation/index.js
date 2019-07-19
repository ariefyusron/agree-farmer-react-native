import React from "react";
import {
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";

import Home from "../../home/screens/Home";
import Inbox from "../../inbox/screens/Inbox";
import Setting from "../../setting/screens/Setting";
import { BottomTab } from "../components";

const bottomTab = createMaterialTopTabNavigator(
  {
    Home,
    Inbox,
    Setting
  },
  {
    tabBarComponent: props => <BottomTab {...props} />,
    tabBarPosition: "bottom",
    lazy: true,
    swipeEnabled: false
  }
);

export default createAppContainer(bottomTab);

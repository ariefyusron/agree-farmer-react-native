import React from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import Home from "../../home/screens/Home";
import Inbox from "../../inbox/screens/Inbox";
import Setting from "../../setting/screens/Setting";
import { BottomTab } from "../components";

const bottomTab = createBottomTabNavigator(
  {
    Home,
    Inbox,
    Setting
  },
  {
    tabBarComponent: props => <BottomTab {...props} />
  }
);

export default createAppContainer(bottomTab);

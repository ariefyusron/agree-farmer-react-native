import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import Home from "../../home/screens/Home";
import Inbox from "../../inbox/screens/Inbox";
import Setting from "../../setting/screens/Setting";

const bottomTab = createBottomTabNavigator({
  Home,
  Inbox,
  Setting
});

export default createAppContainer(bottomTab);

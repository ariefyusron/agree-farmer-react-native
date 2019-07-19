/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from "react";
import { StatusBar } from "react-native";

import Navigation from "./src/public/navigation";

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <Navigation />
    </Fragment>
  );
};

export default App;

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Join from "../screens/Join";
import Login from "../screens/Login";

const Nav = createNativeStackNavigator();

const OutNav = () => (
  <Nav.Navigator>
    <Nav.Screen name="Login" component={Login} />
    <Nav.Screen name="Join" component={Join} />
  </Nav.Navigator>
);

export default OutNav;

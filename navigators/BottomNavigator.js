import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ListingScreen from "../screens/ListScreen";

const Tab = createBottomTabNavigator();

const TabContainer = styled.View`
  flex-direction: row;
  padding: 20px;
  background-color: white;
  border-top-width: 0.3px;
  border-color: grey;
  align-items: center;
  justify-content: center;
`;

const TabBarContainer = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const View = styled.View`
  height: 5px;
  width: 30px;
  position: absolute;
  background-color: black;
  top: -20px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;

const MyTabBar = ({ state, descriptors, navigation }) => {
  return (
    <TabContainer>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const TabBarIcon = options.tabBarIcon;
        return (
          <TabBarContainer onPress={() => navigation.navigate(route.name)}>
            <TabBarIcon
              size={30}
              color={isFocused ? "black" : "grey"}
              focused={isFocused}
            />
            {isFocused && <View />}
          </TabBarContainer>
        );
      })}
    </TabContainer>
  );
};

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      options={{ headerShown: false }}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              color={color}
              size={size}
              name={focused ? "home" : "home-outline"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="FavoriteScreen"
        component={ListingScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              color={color}
              size={size}
              name={focused ? "heart" : "heart-outline"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              color={color}
              size={size}
              name={focused ? "account" : "account-outline"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

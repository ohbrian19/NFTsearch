import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import BottomNavigator from "./navigators/BottomNavigator";

import HomeScreen from "./screens/HomeScreen";
import StartScreen from "./screens/StartScreen";
// import InNav from "./navigators/InNav";
// import OutNav from "./navigators/OutNav";

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="StartScreen"
            component={StartScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="HomeScreen"
            component={BottomNavigator}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

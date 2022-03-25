import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Realm from "realm";
import AppLoading from "expo-app-loading";

import BottomNavigator from "./navigators/BottomNavigator";
import StartScreen from "./screens/StartScreen";
import DetailScreen from "./screens/DetailScreen";
import { DBContext } from "./context";

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

const FavoriteSchema = {
  name: "Favorite",
  properties: {
    _id: "int",
    name: "string",
    image: "string",
    description: "string",
  },
  primaryKey: "_id",
};

export default function App() {
  const [ready, setReady] = useState(false);
  const [realm, setRealm] = useState(false);
  const onFinish = () => setReady(true);
  const startLoading = async () => {
    const connection = await Realm.open({
      path: "nftSearch",
      schema: [FavoriteSchema],
    });
    setRealm(connection);
  };
  if (!ready) {
    return (
      <AppLoading
        onError={console.error}
        startAsync={startLoading}
        onFinish={onFinish}
      />
    );
  }
  return (
    <DBContext.Provider value={realm}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="StartScreen" component={StartScreen} />
            <Stack.Screen name="HomeScreen" component={BottomNavigator} />
            <Stack.Screen name="DetailScreen" component={DetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </DBContext.Provider>
  );
}

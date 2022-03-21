import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import InNav from "./navigators/InNav";
import OutNav from "./navigators/OutNav";

const queryClient = new QueryClient();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <QueryClientProvider client={queryClient}>
    <NavigationContainer>
      {isLoggedIn ? <InNav /> : <OutNav />}
    </NavigationContainer>
     </QueryClientProvider>
  );
}

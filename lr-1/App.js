import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import MainLayout from "./MainLayout";

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <MainLayout />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;

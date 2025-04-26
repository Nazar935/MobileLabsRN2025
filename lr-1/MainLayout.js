import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import Header from "./components/addHeader/header";
import Footer from "./components/addFooter/footer";
import AppNavigator from "./Navigation";

const MainLayout = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Header />
      <View style={styles.main}>
        <AppNavigator />
      </View>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
  },
  main: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default MainLayout;

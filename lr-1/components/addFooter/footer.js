import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        © 2025 Павленко Назарій, група ІПЗк-23-1
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e6e6e6",
    paddingVertical: 12,
    borderTopWidth: 0.5,
    borderColor: "#ccc",
    alignItems: "center",
  },
  text: {
    fontSize: 13,
    color: "#555",
    fontStyle: "italic",
  },
});

export default Footer;

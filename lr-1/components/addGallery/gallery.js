import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";

const GalleryScreen = () => {
  const items = Array.from({ length: 20 });

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Галерея</Text>
      <View style={styles.gallery}>
        {items.map((_, idx) => (
          <View key={idx} style={styles.item}>
            <Text style={styles.itemText}>#{idx + 1}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdfdfd",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
    color: "#444",
  },
  gallery: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  item: {
    width: "45%",
    aspectRatio: 1,
    backgroundColor: "#e6ecf0",
    borderRadius: 12,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#cbd5e1",
    borderWidth: 1,
  },
  itemText: {
    color: "#555",
    fontWeight: "600",
  },
});

export default GalleryScreen;

import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";


const newsList = Array.from({ length: 6 }, (_, idx) => ({
  id: idx + 1,
  title: `Новина №${idx + 1}`,
  date: `2025-04-0${idx + 1}`,
  preview: `Це опис новини №${idx + 1}, короткий текст для перегляду.`,
  img: "https://placehold.co/80x80?text=News",
}));

const NewsCard = ({ news }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: news.img }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{news.title}</Text>
        <Text style={styles.date}>{news.date}</Text>
        <Text style={styles.preview}>{news.preview}</Text>
      </View>
    </TouchableOpacity>
  );
};

const NewsScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>Новини</Text>
      <FlatList
        data={newsList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <NewsCard news={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#f0f2f5",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color: "#222",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 10,
    marginBottom: 14,
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 14,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  date: {
    fontSize: 13,
    color: "#999",
    marginBottom: 6,
  },
  preview: {
    fontSize: 14,
    color: "#555",
  },
});

export default NewsScreen;

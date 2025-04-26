import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();

  const NavButton = ({ icon, label, target }) => (
    <Pressable style={styles.button} onPress={() => navigation.navigate(target)}>
      <Image source={icon} style={styles.buttonIcon} />
      <Text style={styles.buttonLabel}>{label}</Text>
    </Pressable>
  );

  return (
    <View style={styles.wrapper}>
      <View style={styles.branding}>
        <Image
          source={require("../../assets/university-colored.png")}
          style={styles.logo}
        />
        <Text style={styles.appName}>MyMobilePortal</Text>
      </View>

      <View style={styles.navRow}>
        <NavButton
          icon={require("../../assets/home.png")}
          label="Новини"
          target="News"
        />
        <NavButton
          icon={require("../../assets/image.png")}
          label="Галерея"
          target="Gallery"
        />
        <NavButton
          icon={require("../../assets/user.png")}
          label="Профіль"
          target="Auth"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fefefe",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  branding: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 35,
  },
  appName: {
    marginLeft: 12,
    fontSize: 20,
    fontWeight: "600",
    color: "#222",
  },
  navRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  button: {
    alignItems: "center",
    gap: 4,
  },
  buttonIcon: {
    width: 26,
    height: 26,
    tintColor: "#007aff",
  },
  buttonLabel: {
    fontSize: 13,
    color: "#007aff",
  },
});

export default Header;

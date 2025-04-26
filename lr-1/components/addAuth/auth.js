import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";

const AuthScreen = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    lastName: "",
    firstName: "",
  });

  const handleInput = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    if (
      !form.email ||
      !form.password ||
      !form.confirmPassword ||
      !form.lastName ||
      !form.firstName
    ) {
      Alert.alert("Увага", "Заповніть усі поля!");
      return;
    }
    if (form.password !== form.confirmPassword) {
      Alert.alert("Помилка", "Паролі не співпадають!");
      return;
    }

    Alert.alert("Реєстрація успішна", `${form.firstName}, ласкаво просимо!`);
  };

  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <Text style={styles.heading}>Створення акаунту</Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={form.email}
          onChangeText={(text) => handleInput("email", text)}
          keyboardType="email-address"
          placeholder="example@email.com"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Пароль</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          value={form.password}
          onChangeText={(text) => handleInput("password", text)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Підтвердження пароля</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          value={form.confirmPassword}
          onChangeText={(text) => handleInput("confirmPassword", text)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Прізвище</Text>
        <TextInput
          style={styles.input}
          value={form.lastName}
          onChangeText={(text) => handleInput("lastName", text)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Імʼя</Text>
        <TextInput
          style={styles.input}
          value={form.firstName}
          onChangeText={(text) => handleInput("firstName", text)}
        />
      </View>

      <Pressable style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Зареєструватися</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 25,
    backgroundColor: "#f2f2f2",
    flexGrow: 1,
    justifyContent: "center",
  },
  heading: {
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 30,
    color: "#333",
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    color: "#555",
  },
  input: {
    backgroundColor: "#fff",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#bbb",
  },
  submitButton: {
    backgroundColor: "#4caf50",
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center",
  },
  submitText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});

export default AuthScreen;

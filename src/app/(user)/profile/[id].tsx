import React from "react";
import { View, StyleSheet } from "react-native";
import { Stack } from "expo-router";

const OrderDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Profile" }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    gap: 10,
  },
});

export default OrderDetailScreen;

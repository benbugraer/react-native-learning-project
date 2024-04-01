import React from "react";
import { FlatList, Text, StyleSheet } from "react-native";

import { View } from "@/components/Themed";

export default function ProfileScreen() {
  return (
    <>
      <View style={styles.container}>
        <Text>Profile Screen Data Here</Text>
        <Text>Username</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f4f4f4",
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
  },
});

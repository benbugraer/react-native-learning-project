import React from "react";
import { FlatList, Text, StyleSheet } from "react-native";

import { View } from "@/components/Themed";

export default function ProfileScreen() {
  return (
    <>
      <View style={styles.container}>
        <Text>Profile Screen Data Here</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
  },
});

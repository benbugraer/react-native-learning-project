import React from "react";
import { View, Text, Platform, FlatList, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useCart } from "@/providers/CartProvider";
import CartListItem from "@/components/CartListItems";
import Button from "@/components/Button";

const CartScreen = () => {
  const { items, total, checkout } = useCart();

  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{ gap: 10 }}
      />

      <Text style={styles.total}>Total: ${total}</Text>

      <Button text="Checkout" onPress={checkout} />

      {/* Use a light status bar on Android to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "android" ? "light" : "auto"} />
    </View>
  );
};

const styles = StyleSheet.create({
  total: {
    padding: 10,
    textTransform: "uppercase",
    fontSize: 17,
    fontWeight: "500",
  },
});

export default CartScreen;

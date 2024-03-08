import { View, Text, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useCart } from "@/providers/CartProvider";

const CartScreen = () => {
  const { items } = useCart();

  return (
    <View>
      <Text>Cart items length: {items.length}</Text>

      {/* Use a light status bar on Android to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "android" ? "light" : "auto"} />
    </View>
  );
};

export default CartScreen;

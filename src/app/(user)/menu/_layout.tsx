import React from "react";
import { Stack, Link } from "expo-router";
import { StyleSheet, Pressable } from "react-native";
import Colors from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";

export default function MenuStack() {
  return (
    <Stack
      screenOptions={{
        headerRight: () => (
          <Link href="/cart" asChild>
            <Pressable>
              {({ pressed }) => (
                <FontAwesome
                  name="shopping-cart"
                  color={Colors.dark.background}
                  style={{
                    marginRight: 15,
                    fontSize: 27,
                    opacity: pressed ? 0.5 : 1,
                  }}
                />
              )}
            </Pressable>
          </Link>
        ),
      }}
    >
      <Stack.Screen name="index" options={{ title: "Menu" }} />
    </Stack>
  );
}

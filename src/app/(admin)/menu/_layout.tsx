import { Stack, Link } from "expo-router";
import { StyleSheet, Pressable } from "react-native";
import Colors from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";

export default function MenuStack() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Menu",
          headerRight: () => (
            <Link href="/" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="plus-square-o"
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
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: "Menu",
          headerRight: () => (
            <Link href="/" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="pencil"
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
      />
    </Stack>
  );
}

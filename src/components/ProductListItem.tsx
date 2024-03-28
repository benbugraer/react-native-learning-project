import { StyleSheet, Text, Image, Pressable } from "react-native";

import Colors from "@/constants/Colors";
import { Link, useSegments } from "expo-router";
import { Tables } from "@/database.types";
import React from "react";

export const defaultPizzaImg =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

export type ProductListItemProps = {
  product: Tables<"products">; // type.ts içerisindeki helper sayesinde kolaylıkla alabiliyoruz.
};

const ProductListItem = ({ product }: ProductListItemProps) => {
  const segments = useSegments();

  return (
    <Link href={`/${segments[0]}/menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: product.image || defaultPizzaImg }}
          resizeMode="contain" // Burada ya da image style kısmında değiştirilebilir.
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
    flex: 1,
    maxWidth: "50%",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  price: {
    fontSize: 17,
    color: Colors.light.priceColor,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    // objectFit: "contain",
  },
});

export default ProductListItem;

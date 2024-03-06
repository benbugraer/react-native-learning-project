import { useLocalSearchParams, Stack } from "expo-router";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import products from "@assets/data/products";
import { defaultPizzaImg } from "@/components/ProductListItem";
import { useState } from "react";
import Button from "@/components/Button";

const sizes = ["S", "M", "L", "XL"];

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  const [selectedSize, setSelectedSize] = useState("M");

  const product = products.find((p) => p.id.toString() === id);

  const addToCart = () => {
    console.warn(`Adding To Cart, size: `, selectedSize);
  };

  if (!product) {
    return <Text>Product not found!</Text>;
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product.name }} />
      <Image
        source={{ uri: product.image || defaultPizzaImg }}
        style={styles.image}
      />

      <Text style={styles.selectSizeText}>Select Size</Text>
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable
            onPress={() => {
              setSelectedSize(size);
            }}
            style={[
              styles.size,
              {
                backgroundColor: selectedSize === size ? "gray" : "white",
              },
            ]}
            key={size}
          >
            <Text
              style={[
                styles.sizeText,
                { color: selectedSize === size ? "white" : "gray" },
              ]}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.price}>Price: ${product.price}</Text>
      <Button text="Add To Cart" onPress={addToCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  price: {
    padding: 15,
    marginTop: "auto",
    fontSize: 20,
    fontWeight: "600",
  },
  size: {
    backgroundColor: "gainsboro",
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  sizes: {
    marginVertical: 12,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  sizeText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
  selectSizeText: {
    color: "black",
    fontSize: 25,
    paddingHorizontal: 15,
    fontWeight: "500",
  },
});

export default ProductDetailsScreen;

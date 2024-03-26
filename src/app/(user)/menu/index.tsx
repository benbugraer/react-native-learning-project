import React from "react";
import { ActivityIndicator, FlatList, Text } from "react-native";

import ProductListItem from "@/components/ProductListItem";
import { useProductList } from "@/api/products";

export default function MenuScreen() {
  const { data: product, error, isLoading } = useProductList(); // We can create new custom hook like useProductList item from app > api > products

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to fetch products</Text>;
  }

  return (
    <FlatList
      data={product}
      renderItem={({ item }) => <ProductListItem product={item} />}
      numColumns={2}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      columnWrapperStyle={{ gap: 10 }}
    />
  );
}

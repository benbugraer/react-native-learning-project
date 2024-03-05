import { StyleSheet, Text, Image, Pressable } from "react-native";

import Colors from "@/constants/Colors";
import { Product } from "@/types";
import { Link } from "expo-router";

export const defaultPizzaImg =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

export type ProductListItemProps = {
  product: Product;
};

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <Link href={`/menu/${product.id}`} asChild>
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

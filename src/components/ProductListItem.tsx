import { StyleSheet, Text, View, Image } from "react-native";

import Colors from "@/src/constants/Colors";

const ProductListItem = ({ product }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: product.image }} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    alignItems: "flex-start",
    borderBottomEndRadius: 20,
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
    objectFit: "cover",
  },
});

export default ProductListItem;

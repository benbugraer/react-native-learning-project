import Button from "@/components/Button";
import { defaultPizzaImg } from "@/components/ProductListItem";
import Colors from "@/constants/Colors";
import { useState } from "react";
import { View, Image, Text, StyleSheet, TextInput } from "react-native";

import { Stack } from "expo-router";

import * as ImagePicker from "expo-image-picker";

const CreateProductScreen = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const [image, setImage] = useState<string | null>(null);

  const [errors, setErrors] = useState("");

  const resetFields = () => {
    setName("");
    setPrice("");
  };

  const validateInput = () => {
    setErrors("");
    if (!name) {
      setErrors("Name is required");
      return false;
    }
    if (!price) {
      setErrors("Price is required");
      return false;
    }
    if (isNaN(parseFloat(price))) {
      setErrors("Price could be a number!!");
      return false;
    }
    return true;
  };

  const onCreate = () => {
    if (!validateInput()) {
      return;
    }

    console.warn("Creating Product: ", name);

    // Save in the database
    resetFields();
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Create New Product" }} />
      <Image source={{ uri: image || defaultPizzaImg }} style={styles.image} />
      <Text onPress={pickImage} style={styles.link}>
        Select Image
      </Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        style={styles.input}
      />
      <Text style={styles.label}>Price ($)</Text>
      <TextInput
        placeholder="Enter Price"
        value={price}
        onChangeText={setPrice}
        style={styles.input}
        keyboardType="numeric"
      />

      <Text style={{ color: "red" }}>{errors}</Text>
      <Button onPress={onCreate} text="Create" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  input: {
    backgroundColor: "white",
    marginTop: 5,
    marginBottom: 20,
    padding: 10,
    borderRadius: 20,
  },
  label: {
    marginLeft: 10,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "gray",
    fontSize: 15,
  },
  image: {
    width: "50%",
    aspectRatio: 1,
    alignSelf: "center",
  },
  link: {
    fontSize: 18,
    textAlign: "center",
    color: Colors.light.tint,
    marginVertical: 15,
    fontWeight: "bold",
  },
});

export default CreateProductScreen;

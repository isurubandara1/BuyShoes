import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { CartContext } from "./CartContext";
import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

const CartScreen = () => {
  const navigation = useNavigation();
  const { cartItems, removeFromCart } = useContext(CartContext);

  const handleRemoveItem = (index) => {
    removeFromCart(index);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.total, 0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.arrocontainer}>
        <TouchableOpacity
          style={styles.arrow}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Cart</Text>
        </View>
      </View>
      <FlatList
        data={cartItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.price}>${item.price}</Text>
              <Text style={styles.size}>Size: {item.size}</Text>
              <Text style={styles.count}>Quantity: {item.count}</Text>
              <Text style={styles.total}>Total: ${item.total}</Text>
            </View>
            {/* Add remove icon/button */}
            <TouchableOpacity
              onPress={() => handleRemoveItem(index)}
              style={styles.removeButton}
            >
              <Ionicons name="trash-bin-outline" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>
          Total Price: ${calculateTotalPrice()}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "black",
  },
  arrocontainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  arrow: {
    borderColor: "#0B95BE",
    borderWidth: 3,
    borderRadius: 50,
    backgroundColor: "#0B95BE",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
  titleContainer: {
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    color:'white'
  },
  itemContainer: {
    flexDirection: "row",
    marginBottom: 20,
    backgroundColor: "#90CAF9",
    padding: 10,
    borderRadius: 10,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  description: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    marginTop: 5,
  },
  size: {
    fontSize: 16,
    marginTop: 5,
  },
  count: {
    fontSize: 16,
    marginTop: 5,
  },
  total: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: "bold",
  },
  removeButton: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  totalContainer: {
    padding: 20,
    borderTopWidth: 5,
    borderColor: "black",
    alignItems: "center",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CartScreen;

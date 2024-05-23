import React, { useContext } from 'react';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { CartContext } from './CartContext'; // Adjust the path as needed
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo

const CartScreen = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const handleRemoveItem = (index) => {
    removeFromCart(index);
  };

  return (
    <View style={styles.container}>
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
            <TouchableOpacity onPress={() => handleRemoveItem(index)} style={styles.removeButton}>
              <Ionicons name="trash-bin-outline" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
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
    fontWeight: 'bold',
  },
  removeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
});

export default CartScreen;

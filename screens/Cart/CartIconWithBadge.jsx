import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CartContext } from './CartContext'; // Adjust the path as needed

const CartIconWithBadge = ({ name, color, size }) => {
  const { cartItemCount } = useContext(CartContext);

  return (
    <View style={styles.iconContainer}>
      <Ionicons name={name} size={size} color={color} />
      {cartItemCount > 0 && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{cartItemCount}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 24,
    height: 24,
    margin: 5,
  },
  badgeContainer: {
    position: 'absolute',
    right: -8,
    top: -12,
    backgroundColor: 'red',
    borderRadius: 6,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default CartIconWithBadge;

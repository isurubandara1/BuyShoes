import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CartContext } from './CartContext'; // Adjust the path as needed

const CartIconWithBadge = ({ name, color, size }) => {
  const { cartItemCount } = useContext(CartContext);

  return (
    <View style={{ width: 24, height: 24, margin: 5 }}>
      <Ionicons name={name} size={size} color={color} />
      {cartItemCount > 0 && (
        <View
          style={{
            position: 'absolute',
            right: -6,
            top: -3,
            backgroundColor: 'red',
            borderRadius: 6,
            width: 12,
            height: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>{cartItemCount}</Text>
        </View>
      )}
    </View>
  );
};

export default CartIconWithBadge;

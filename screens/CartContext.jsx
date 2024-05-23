// CartContext.js
import React, { createContext, useState } from 'react';
import { ToastAndroid } from 'react-native';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    ToastAndroid.show('Your item has been added to the cart!', ToastAndroid.SHORT);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    const removedItem = updatedCart.splice(index, 1)[0];
    setCartItems(updatedCart);
    ToastAndroid.show(`Removed ${removedItem.description} from the cart!`, ToastAndroid.SHORT);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

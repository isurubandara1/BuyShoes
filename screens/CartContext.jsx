// CartContext.js
import React, { createContext, useState, useEffect } from 'react';
import { ToastAndroid } from 'react-native';

export const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const count = cartItems.reduce((total, item) => total + item.count, 0);
    setCartItemCount(count);
  }, [cartItems]);

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
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, cartItemCount }}>
      {children}
    </CartContext.Provider>
  );
};
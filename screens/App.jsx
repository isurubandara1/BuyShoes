// App.jsx

import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import FavoritesScreen from './FavoritesScreen';
import CartScreen from './CartScreen';
import ProfileScreen from './ProfileScreen';
import LargePage from './LargePage';
import { NavigationContainer } from '@react-navigation/native';
import { CartProvider } from './CartContext';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function App() {
  const [favorites, setFavorites] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const navigation = useNavigation();

  const navigateToFavorites = () => {
    navigation.navigate('Favorites', { favorites, products });
  };

  return (
    <CartProvider>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Favorites') {
                iconName = focused ? 'heart' : 'heart-outline';
              } else if (route.name === 'Cart') {
                iconName = focused ? 'cart' : 'cart-outline';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'person' : 'person-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            initialParams={{ favorites, setFavorites, navigateToFavorites }}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Favorites"
            component={FavoritesScreen}
            initialParams={{ favorites, products }}
          />
          <Tab.Screen name="Cart" component={CartScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="LargePage" component={LargePage} options={{ tabBarButton: () => null }} />
        </Tab.Navigator>
    </CartProvider>
  );
}

export default App;

import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import FavoritesScreen from './FavoritesScreen';
import CartScreen from './CartScreen';
import ProfileScreen from './ProfileScreen';
import LargePage from './LargePage';
import { CartProvider } from './Cart/CartContext';
import { useNavigation } from '@react-navigation/native';
import CartIconWithBadge from './CartIconWithBadge';
import FirstPage from './FirstPage'; 
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import { createStackNavigator } from '@react-navigation/stack';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function MainTabs() {
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

          if (route.name === 'Cart') {
            return <CartIconWithBadge name={iconName} size={size} color={color} />;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        initialParams={{ favorites: [], setFavorites: () => {} }}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        initialParams={{ favorites: [], products: [] }}
      />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="LargePage" component={LargePage} options={{ tabBarButton: () => null }} />
    </Tab.Navigator>
    </CartProvider>
  );
}

function App() {
  return (
        <Stack.Navigator initialRouteName="Login"> 
          <Stack.Screen name="FirstPage" component={FirstPage} options={{ headerShown: false }} />
          <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} /> 
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        </Stack.Navigator>
  );
}


export default App;

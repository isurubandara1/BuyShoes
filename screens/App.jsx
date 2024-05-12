import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Import icons from Expo
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import FavoritesScreen from './FavoritesScreen'; // Import FavoritesScreen component
import CartScreen from './CartScreen'; // Import CartScreen component
import ProfileScreen from './ProfileScreen'; // Import ProfileScreen component
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook


const Tab = createBottomTabNavigator();


function App() {
  const [favorites, setFavorites] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const navigation = useNavigation(); // Initialize useNavigation hook

  const navigateToFavorites = () => {
    navigation.navigate('Favorites', { favorites, products }); // Pass favorites and products as navigation parameters
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'Favorites') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // Return an Ionicons component with the appropriate name and style
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        initialParams={{ favorites, setFavorites, navigateToFavorites }}
        options={{ headerShown: false }} // Hide the header for the Home screen
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        onPress={navigateToFavorites} 
        initialParams={{ favorites, products }} 
      />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default App;

import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const FavoritesScreen = ({ route, removeFromFavorites }) => {
  const { favorites, products } = route.params; // Receive favorites and products from navigation parameters

  const handleRemoveFavorite = (productId) => {
    // Call the removeFromFavorites function with the productId to remove the item
    removeFromFavorites(productId);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {favorites.length > 0 ? (
          favorites.map((productId, index) => {
            const product = products.find(item => item.id === productId); // Find the product details
            return (
              <View key={index} style={styles.imageTextContainer}>
                {/* Product image */}
                <Image source={product.image} style={styles.image} />
                {/* Product description */}
                <Text style={styles.textDescription}>{product.description}</Text>
                {/* Product price */}
                <Text style={styles.textPrice}>{product.price}</Text>
                {/* Delete button */}
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => handleRemoveFavorite(productId)} // Call handleRemoveFavorite with productId
                >
                  <Icon name="trash" size={20} color="#fff" />
                </TouchableOpacity>
              </View>
            );
          })
        ) : (
          <Text style={styles.noFavoritesText}>No favorites selected</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollView: {
    paddingBottom: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 10,
  },
  imageTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 220,
    width: '45%',
    margin: 5,
    padding: 10,
    backgroundColor: '#90CAF9',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  textDescription: {
    fontSize: 15,
    textAlign: 'center',
  },
  textPrice: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '900',
    marginTop: 5,
  },
  deleteButton: {
    backgroundColor: 'red',
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  noFavoritesText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default FavoritesScreen;

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FavoritesScreen = ({ route }) => {
  const { favorites } = route.params; // Receive favorites list from navigation parameters
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
      {favorites.length > 0 ? (
        favorites.map((product, index) => (
          <View key={index} style={styles.favoriteItem}>
            <Text>{product.description}</Text>
            <Text>{product.price}</Text>
          </View>
        ))
      ) : (
        <Text>No favorites selected</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  favoriteItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginVertical: 5,
    width: '80%',
  },
});

export default FavoritesScreen;

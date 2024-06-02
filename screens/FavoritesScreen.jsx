import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 

const FavoritesScreen = ({ route, removeFromFavorites }) => {
  const navigation = useNavigation(); // Initialize useNavigation hook
  const { favorites, products } = route.params; // Receive favorites and products from navigation parameters

  const handleRemoveFavorite = (productId) => {
    // Call the removeFromFavorites function with the productId to remove the item
    removeFromFavorites(productId);
  };

  return (
    <View style={styles.container}>
      <View style={styles.arrocontainer}>
      <TouchableOpacity
          style={styles.arrow}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Favorites</Text>
        </View>
      </View>
      
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
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  titleContainer:{
    marginTop:10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color:'white',
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
    margin: 8,
    padding: 10,
    backgroundColor: '#90CAF9',
    borderRadius: 10,
  },
  arrocontainer:{
    flexDirection:'row',
    marginTop:20
  },
  arrow: {
    borderColor:'#0B95BE',
    borderWidth:3,
    borderRadius:50,
    backgroundColor:'#0B95BE',
    width:50,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    marginRight:30,
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

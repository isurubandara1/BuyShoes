import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity, Modal, Pressable } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon from the library
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const products = [
  {
    id: 1,
    image: require('../assets/images/adidas/a1.png'),
    description: 'White and black leather adidas',
    price: '50$'
  },{
    id: 2,
    image: require('../assets/images/adidas/a1.png'),
    description: 'White and black leather adidas',
    price: '60$'
  },{
    id: 3,
    image: require('../assets/images/adidas/a1.png'),
    description: 'White and black leather adidas',
    price: '120$'
  },{
    id: 4,
    image: require('../assets/images/adidas/a1.png'),
    description: 'White and black leather adidas',
    price: '10$'
  },{
    id: 5,
    image: require('../assets/images/adidas/a1.png'),
    description: 'White and black leather adidas',
    price: '200$'
  },{
    id: 6,
    image: require('../assets/images/adidas/a1.png'),
    description: 'White zz black leather adidas',
    price: '1050$'
  },{
    id: 7,
    image: require('../assets/images/adidas/a1.png'),
    description: 'White and plo leather adidas',
    price: '2000$'
  },{
    id: 8,
    image: require('../assets/images/adidas/a1.png'),
    description: 'White and black leather adidas',
    price: '130$'
  },
  // Add more products as needed
];

const HomeScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [sortedProducts, setSortedProducts] = useState(products);
  const [favorites, setFavorites] = useState([]);
  const navigation = useNavigation(); // Initialize useNavigation hook

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
 
  const sortByPrice = (type) => {
    const sorted = [...products].sort((a, b) => {
      if (type === 'lowToHigh') {
        return parseInt(a.price) - parseInt(b.price);
      } else {
        return parseInt(b.price) - parseInt(a.price);
      }
    });
    setSortedProducts(sorted);
    toggleModal();
  };

  const handleFavoriteToggle = (productId) => {
    const updatedFavorites = [...favorites]; // Create a copy of the current favorites list
  
    const index = updatedFavorites.indexOf(productId);
    if (index === -1) {
      updatedFavorites.push(productId); // Add to favorites if not already in the list
    } else {
      updatedFavorites.splice(index, 1); // Remove from favorites if already in the list
    }
  
    setFavorites(updatedFavorites); // Update the favorites list
  
    // Update the favorites in the FavoritesScreen as well
    navigation.navigate('Favorites', { favorites: updatedFavorites, products });
  };


  const filteredProducts = sortedProducts.filter(product =>
    product.description.toLowerCase().includes(searchText.toLowerCase())
  );

  const navigateToFavorites = () => {
    navigation.navigate('Favorites', { favorites: updatedFavorites, products });// Pass favorites and products as navigation parameters
  };
  
  const handleImagePress = () => {
    navigation.navigate('LargePage');
  };
  
  
  
  return (
    <View style={styles.container}>
      <View style={styles.wlimageContainer}>
        <Image source={require('../assets/images/wal.jpg')} style={styles.wlimage} />
      </View>
      <View style={styles.fixedContent}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search items..."
            value={searchText}
            onChangeText={setSearchText}
          />
          <TouchableOpacity onPress={toggleModal} style={styles.filterIcon}>
            <Icon name="filter" size={20} color="#888" />
          </TouchableOpacity>
        </View>
        <View style={styles.newCollectionContainer}>
          <Text style={styles.newCollectionText}>New Collection</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            {filteredProducts.map((product, index) => (
              <View style={styles.imageTextContainer} key={index}>
                <TouchableOpacity
                  style={styles.favoriteIcon}
                  onPress={() => handleFavoriteToggle(product.id)}
                >
                  <Icon
                    name={favorites.includes(product.id) ? 'heart' : 'heart-o'}
                    size={20}
                    color={favorites.includes(product.id) ? '#EC407A' : 'black'}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleImagePress}>
                  <View style={styles.imageContainer}>
                    <Image source={product.image} style={styles.image} />
                  </View>
                </TouchableOpacity>
                <Text style={styles.textDescription}>{product.description}</Text>
                <Text style={styles.textPrice}>{product.price}</Text>
              </View>
            ))}
          </View>
          <TouchableOpacity onPress={navigateToFavorites}>
            <Text>Go to Favorites</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable onPress={() => sortByPrice('lowToHigh')} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>From Low to High</Text>
            </Pressable>
            <Pressable onPress={() => sortByPrice('highToLow')} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>From High to Low</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wlimageContainer: {
    height: 250,
    width: '100%',
    backgroundColor: 'lightgray',
  },
  wlimage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode:'stretch',
  },
  
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#888',
    borderRadius: 10,
    margin:15,
    padding: 5,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  filterIcon: {
    marginLeft: 10,
  },
  newCollectionContainer:{
      alignItems:'flex-start',
      marginLeft:18,
  },
  newCollectionText:{
    fontSize:30,
    fontWeight:'bold',
    color:"#0D47A1",
    fontStyle:"italic",
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical:10,
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
    resizeMode: 'cover',
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
  favoriteIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginBottom: 10,
    width: 200,
    backgroundColor: '#90CAF9',
    alignItems: 'center',
  },
  modalButtonText: {
    fontWeight: 'bold',
  },
});

import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity, Modal, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon from the library

const products = [
  {
    image: require('../assets/images/adidas/a1.png'),
    description: 'White and black leather adidas',
    price: '100$'
  },
  {
    image: require('../assets/images/adidas/a1.png'),
    description: 'White and black leather adidas',
    price: '10$'
  },{
    image: require('../assets/images/adidas/a1.png'),
    description: 'zzzzz and black leather adidas',
    price: '420$'
  },{
    image: require('../assets/images/adidas/a1.png'),
    description: 'White and black leather adidas',
    price: '520$'
  },{
    image: require('../assets/images/adidas/a1.png'),
    description: 'White and black leather adidas',
    price: '1520$'
  },{
    image: require('../assets/images/adidas/a1.png'),
    description: 'White and black leather adidas',
    price: '20$'
  },{
    image: require('../assets/images/adidas/a1.png'),
    description: 'White and black leather adidas',
    price: '2520$'
  },{
    image: require('../assets/images/adidas/a1.png'),
    description: 'White and black leather adidas',
    price: '820$'
  },
  // Add more products as needed
];

const HomeScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [sortedProducts, setSortedProducts] = useState(products);
  const [sortBy, setSortBy] = useState(null);

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
    setSortBy(type);
    setSortedProducts(sorted);
    toggleModal();
  };

  const filteredProducts = sortedProducts.filter(product =>
    product.description.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
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
        <View style={styles.imageContainer}>
          {filteredProducts.map((product, index) => (
            <View style={styles.imageTextContainer} key={index}>
              <Image source={product.image} style={styles.image} />
              <Text style={styles.textDescription}>{product.description}</Text>
              <Text style={styles.textPrice}>{product.price}</Text>
            </View>
          ))}
        </View>
      </View>
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
    </ScrollView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
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
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 10,
  },
  imageTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: '45%', 
    margin: 5,
    padding: 10,
    backgroundColor: '#F5DAD2',
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
    backgroundColor: '#F5DAD2',
    alignItems: 'center',
  },
  modalButtonText: {
    fontWeight: 'bold',
  },
});

import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';
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
    price: '120$'
  },{
    image: require('../assets/images/adidas/a1.png'),
    description: 'zzzzz and black leather adidas',
    price: '120$'
  },{
    image: require('../assets/images/adidas/a1.png'),
    description: 'White and black leather adidas',
    price: '120$'
  },
  // Add more products as needed
];

const HomeScreen = () => {
  const [searchText, setSearchText] = useState('');
  const filteredProducts = products.filter(product =>
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
});

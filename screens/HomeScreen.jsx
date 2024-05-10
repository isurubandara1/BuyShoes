import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

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
    description: 'White and black leather adidas',
    price: '120$'
  },{
    image: require('../assets/images/adidas/a1.png'),
    description: 'White and black leather adidas',
    price: '120$'
  },{
    image: require('../assets/images/adidas/a1.png'),
    description: 'White and black leather adidas',
    price: '120$'
  },{
    image: require('../assets/images/adidas/a1.png'),
    description: 'White and black leather adidas',
    price: '120$'
  },{
    image: require('../assets/images/adidas/a1.png'),
    description: 'White and black leather adidas',
    price: '120$'
  },{
    image: require('../assets/images/adidas/a1.png'),
    description: 'White and black leather adidas',
    price: '120$'
  },{
    image: require('../assets/images/adidas/a1.png'),
    description: 'White and black leather adidas',
    price: '120$'
  },{
    image: require('../assets/images/adidas/a1.png'),
    description: 'White and black leather adidas',
    price: '120$'
  },
];

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text>HomeScreen</Text>
        <View style={styles.imageContainer}>
          {products.map((product, index) => (
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
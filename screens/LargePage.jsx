import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LargePage = () => {
  const [itemCount, setItemCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M'); // Default size
  const itemPrice = 50;
  const totalPrice = itemPrice * itemCount;

  const increaseItemCount = () => {
    setItemCount(itemCount + 1);
  };

  const decreaseItemCount = () => {
    if (itemCount > 1) {
      setItemCount(itemCount - 1);
    }
  };

  const selectSize = (size) => {
    setSelectedSize(size);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/adidas/a1.png')} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.description}>White and black leather adidas</Text>
        <Text style={styles.price}>${totalPrice}</Text>
        <View style={styles.sizeContainer}>
          <TouchableOpacity
            style={[
              styles.sizeButton,
              selectedSize === 'S' && styles.selectedSizeButton,
            ]}
            onPress={() => selectSize('S')}>
            <Text style={[styles.sizeText, selectedSize === 'S' && styles.selectedSizeText]}>S</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.sizeButton,
              selectedSize === 'M' && styles.selectedSizeButton,
            ]}
            onPress={() => selectSize('M')}>
            <Text style={[styles.sizeText, selectedSize === 'M' && styles.selectedSizeText]}>M</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.sizeButton,
              selectedSize === 'XL' && styles.selectedSizeButton,
            ]}
            onPress={() => selectSize('XL')}>
            <Text style={[styles.sizeText, selectedSize === 'XL' && styles.selectedSizeText]}>XL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.sizeButton,
              selectedSize === 'XXL' && styles.selectedSizeButton,
            ]}
            onPress={() => selectSize('XXL')}>
            <Text style={[styles.sizeText, selectedSize === 'XXL' && styles.selectedSizeText]}>XXL</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.counterContainer}>
          <TouchableOpacity style={styles.counterButton} onPress={decreaseItemCount}>
            <Text style={styles.counterButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.itemCount}>{itemCount}</Text>
          <TouchableOpacity style={styles.counterButton} onPress={increaseItemCount}>
            <Text style={styles.counterButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buyButton}>
            <Text style={[styles.buttonText, { color: 'white' }]}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  infoContainer: {
    alignItems: 'center',
  },
  description: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 25,
    marginBottom: 20,
    fontWeight:'bold',
  },
  sizeContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  sizeButton: {
    marginRight: 10,
    borderWidth: 3,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 5,
    borderColor: 'grey',
  },
  sizeText: {
    fontSize: 16,
    fontWeight:'bold',
  },
  selectedSizeButton: {
    backgroundColor: '#3366ff', // Color change for selected size
  },
  selectedSizeText: {
    color: 'white', // Text color change for selected size
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  counterButton: {
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  counterButtonText: {
    fontSize: 20,
  },
  itemCount: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  addButton: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  buyButton: {
    backgroundColor: 'grey',
    padding: 15,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default LargePage;

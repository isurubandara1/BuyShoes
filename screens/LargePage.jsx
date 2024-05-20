import React, { useContext, useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import { CartContext } from './CartContext'; // Adjust the path as needed

const LargePage = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { product } = route.params;
  const { addToCart } = useContext(CartContext);

  const [itemCount, setItemCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const itemPrice = parseInt(product.price.replace('$', ''));
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

  const handleAddToCart = () => {
    const item = {
      image: product.image,
      description: product.description,
      price: itemPrice,
      size: selectedSize,
      count: itemCount,
      total: totalPrice,
    };
    addToCart(item);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={product.image} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>${totalPrice}</Text>
        <View style={styles.sizeContainer}>
          <TouchableOpacity
            style={[
              styles.sizeButton,
              selectedSize === 'S' && styles.selectedSizeButton,
            ]}
            onPress={() => selectSize('S')}
          >
            <Text style={[styles.sizeText, selectedSize === 'S' && styles.selectedSizeText]}>S</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.sizeButton,
              selectedSize === 'M' && styles.selectedSizeButton,
            ]}
            onPress={() => selectSize('M')}
          >
            <Text style={[styles.sizeText, selectedSize === 'M' && styles.selectedSizeText]}>M</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.sizeButton,
              selectedSize === 'L' && styles.selectedSizeButton,
            ]}
            onPress={() => selectSize('L')}
          >
            <Text style={[styles.sizeText, selectedSize === 'L' && styles.selectedSizeText]}>L</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.sizeButton,
              selectedSize === 'XL' && styles.selectedSizeButton,
            ]}
            onPress={() => selectSize('XL')}
          >
            <Text style={[styles.sizeText, selectedSize === 'XL' && styles.selectedSizeText]}>XL</Text>
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
          <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buyButton} onPress={() => navigation.navigate('CartScreen')}>
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
    backgroundColor: '#ABCDF0',
    padding: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor:'#22A7F0',
    height:"40%",
    borderRadius:40,
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
    fontWeight: 'bold',
  },
  sizeContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  sizeButton: {
    marginRight: 10,
    borderWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderColor: 'grey',
  },
  sizeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedSizeButton: {
    backgroundColor: '#90CAF9',
    elevation: 5,
    borderColor: '#22A7F0',
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
    backgroundColor: '#003171',
    padding: 15,
    width: '45%',
    alignItems: 'center',
    borderRadius:12,
  },
  buyButton: {
    backgroundColor: '#22A7F0',
    padding: 15,
    borderRadius:12,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize:17,
  },
});

export default LargePage;

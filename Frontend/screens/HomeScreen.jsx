import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity, Modal, Pressable, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { useNavigation } from '@react-navigation/native'; 
import { SafeAreaView } from 'react-native-safe-area-context';

const products = [
  {
    id: 1,
    image: require('../assets/images/adidas/a1.png'),
    description: 'Nike Air Max 270, Black and White',
    price: '150$'
  },
  {
    id: 2,
    image: require('../assets/images/adidas/a2.png'),
    description: 'Adidas Ultraboost 21, White and Black',
    price: '180$'
  },
  {
    id: 3,
    image: require('../assets/images/adidas/a3.png'),
    description: 'Puma RS-X3, Multi-Color',
    price: '110$'
  },
  {
    id: 4,
    image: require('../assets/images/adidas/a4.png'),
    description: 'Reebok Classic Leather, White',
    price: '90$'
  },
  {
    id: 5,
    image: require('../assets/images/adidas/a5.png'),
    description: 'Converse Chuck Taylor All Star, Black',
    price: '60$'
  },
  {
    id: 6,
    image: require('../assets/images/adidas/a6.png'),
    description: 'Converse Taylor new Star, Black',
    price: '140$'
  },
  {
    id: 7,
    image: require('../assets/images/adidas/a7.png'),
    description: 'Converse Taylor new Star, Black',
    price: '280$'
  }, {
    id: 8,
    image: require('../assets/images/adidas/a8.png'),
    description: 'Converse Taylor new Star, Black',
    price: '121$'
  }, {
    id: 9,
    image: require('../assets/images/adidas/a9.png'),
    description: 'Converse Taylor new Star, Black',
    price: '500$'
  }, {
    id: 10,
    image: require('../assets/images/adidas/a10.png'),
    description: 'Converse Taylor new Star, Black',
    price: '225$'
  }, {
    id: 11,
    image: require('../assets/images/adidas/a11.png'),
    description: 'Converse Taylor new Star, Black',
    price: '128$'
  }, {
    id: 12,
    image: require('../assets/images/adidas/a12.png'),
    description: 'Converse Taylor new Star, Black',
    price: '250$'
  }, {
    id: 13,
    image: require('../assets/images/adidas/a13.png'),
    description: 'Converse Taylor new Star, Black',
    price: '400$'
  }, {
    id: 14,
    image: require('../assets/images/adidas/a14.png'),
    description: 'Converse Taylor new Star, Black',
    price: '320$'
  },
];


const HomeScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [sortedProducts, setSortedProducts] = useState(products);
  const [favorites, setFavorites] = useState([]);
  const navigation = useNavigation();
  
  const scrollViewRef = useRef(null);
  const { width } = Dimensions.get('window');
  const imageWidth = width;
  const imageCount = 4;
  let scrollValue = 0;
  let scrolled = 0;

  const images = [
    require('../assets/images/wal0.jpg'),
    require('../assets/images/wal1.jpg'),
    require('../assets/images/wal0.png'),
    require('../assets/images/wal5.jpg'),
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      scrolled++;
      if (scrolled < imageCount) {
        scrollValue = scrollValue + imageWidth;
      } else {
        scrollValue = 0;
        scrolled = 0;
      }
      scrollViewRef.current.scrollTo({ x: scrollValue, animated: true });
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

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
    const updatedFavorites = [...favorites];
    const index = updatedFavorites.indexOf(productId);
    if (index === -1) {
      updatedFavorites.push(productId);
    } else {
      updatedFavorites.splice(index, 1);
    }
    setFavorites(updatedFavorites);
  };

  const filteredProducts = sortedProducts.filter(product =>
    product.description.toLowerCase().includes(searchText.toLowerCase())
  );

  const navigateToFavorites = () => {
    navigation.navigate('Favorites', { favorites, products });
  };

  const handleImagePress = (product) => {
    navigation.navigate('LargePage', { product });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        style={styles.wlimageContainer}
      >
        {images.map((image, index) => (
          <Image key={index} source={image} style={styles.wlimage} />
        ))}
      </ScrollView>
      <View style={styles.fixedContent}>
        
        <View style={styles.searchContainer}>
          
          <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search items..."
            placeholderTextColor={"white"}
            value={searchText}
            onChangeText={setSearchText}
          />
          <TouchableOpacity onPress={toggleModal} style={styles.filterIcon}>
            <Icon name="filter" size={20} color="white" />
          </TouchableOpacity>
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
                <TouchableOpacity onPress={() => handleImagePress(product)}>
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
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black',
  },
  wlimageContainer: {
    width: '100%',
    height:400,
  },
  wlimage: {
    flex: 1,
    width: Dimensions.get('window').width,
    resizeMode: 'stretch',
    height:300,
    opacity: 0.8,
  },

  searchContainer: {
    position:'absolute',
    bottom:0,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    margin: 15,
    padding: 5,
    opacity: 1,
    backgroundColor:'#FFFFFF41'
  },
  searchIcon: {
    marginRight: 10,
    color: 'white',
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: 'white',
  },
  filterIcon: {
    marginLeft: 10,
    color: 'white',
  },
  newCollectionContainer: {
    position: 'relative',
    alignItems: 'flex-start',
    marginLeft: 18,
    marginTop: 20,
  },
  newCollectionText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "#0D47A1",
    fontStyle: "italic",

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
    height: 220,
    width: '45%',
    margin: 5,
    padding: 8,
    backgroundColor: '#DFB910',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'stretch',
    marginBottom: 10,
  },
  textDescription: {
    fontSize: 16,
    textAlign: 'center',
    fontStyle:'italic',
  },
  textPrice: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '900',
    marginTop: 5,
    
    color:'white',
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

import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useRoute, useNavigation } from '@react-navigation/native';

const ProfileScreen = ({ route }) => {
  const { order } = route.params || {};
  
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>Description: {item.description}</Text>
      <Text style={styles.itemText}>Price: ${item.price}</Text>
      <Text style={styles.itemText}>Size: {item.size}</Text>
      <Text style={styles.itemText}>Quantity: {item.count}</Text>
      <Text style={styles.itemText}>Total: ${item.total}</Text>
    </View>
  );

  return (
    <ImageBackground source={require('../assets/images/Profile.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
      <TouchableOpacity style={styles.arrow} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.profileImageContainer}>
          <Image style={styles.profileImage} source={require('../assets/images/propho.jpg')} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Order Details</Text>
        </View>
        {order ? (
          <>
            <Text style={styles.info}>🔷 𝑭𝒖𝒍𝒍 𝑵𝒂𝒎𝒆 : {order.fullName}</Text>
            <Text style={styles.info}>🔷 𝑨𝒅𝒅𝒓𝒆𝒔𝒔 : {order.address}</Text>
            <Text style={styles.info}>🔷 𝑻𝒐𝒘𝒏 : {order.town}</Text>
            <Text style={styles.info}>🔷 𝑻𝒆𝒍𝒆𝒑𝒉𝒐𝒏𝒆 : {order.telephoneNumber}</Text>
            <FlatList
              data={order.items || []}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
            />
          </>
        ) : (
          <Text style={styles.pendingText}>Take Order...</Text>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  arrow: {
    position:'absolute',
    top: 50,
    left: 30,
    zIndex: 1,
    borderColor:'#0B95BE',
    borderWidth:3,
    borderRadius:50,
    backgroundColor:'#0B95BE',
    width:50,
    height:50,
    alignItems:'center',
    justifyContent:'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(223, 185, 16, 0.8)', // Semi-transparent background color
    padding: 10,
  },
  profileImageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    resizeMode: 'cover',
  },
  titleContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  info: {
    fontSize: 22,
    fontWeight:'bold',
    marginBottom: 10,
    color: 'brown',
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 7,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
    color: 'black',
  },
  pendingText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: 'white',
  },
});

export default ProfileScreen;

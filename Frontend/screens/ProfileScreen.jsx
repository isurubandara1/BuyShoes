import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, ImageBackground } from 'react-native';

const ProfileScreen = ({ route }) => {
  const { order } = route.params || {};

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
        <View style={styles.profileImageContainer}>
          <Image style={styles.profileImage} source={require('../assets/images/propho.jpg')} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Order Details</Text>
        </View>
        {order ? (
          <>
            <Text style={styles.info}>Full Name: {order.fullName}</Text>
            <Text style={styles.info}>Address: {order.address}</Text>
            <Text style={styles.info}>Town: {order.town}</Text>
            <Text style={styles.info}>Telephone: {order.telephoneNumber}</Text>
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
    fontSize: 27,
    fontWeight: 'bold',
    color: 'white',
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
    color: 'black',
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 5,
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

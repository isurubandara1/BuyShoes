import React from 'react';
import { StyleSheet, Text, View, FlatList, Image} from 'react-native';

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
    <View style={styles.container}>
       <Image  style={styles.emptyCartImage} source={require('../assets/images/profile.png')} />
      <Text style={styles.title}>Order Details</Text>
      
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
        <Text style={styles.pendingText}>Pending Order...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // padding: 20,
    backgroundColor: 'white',
  },
  emptyCartImage:{
    width:'100%',
    height:'40%',
    resizeMode:'stretch'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
  pendingText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default ProfileScreen;

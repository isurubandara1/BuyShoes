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
       
       <View style={styles.prophoImageContain}><Image  style={styles.prophoImage} source={require('../assets/images/propho.jpg')} /></View>
      <View style={styles.titleContainer}><Text style={styles.title}>Order Details</Text></View>
      
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  emptyCartImage:{
    width:'100%',
    height:'60%',
    resizeMode:'stretch'
  },
  prophoImage:{
    width:130,
    height:130,
    resizeMode:'cover',
    borderRadius:60,
  },
  prophoImageContain:{
    position:'absolute',
    top:250,
    left:130,
    width:120,
    height:100,
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
    color: 'white',
  },
  pendingText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: 'white',
  },
});

export default ProfileScreen;

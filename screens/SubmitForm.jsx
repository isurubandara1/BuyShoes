import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 

const SubmitForm = ({ route }) => {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [town, setTown] = useState('');
  const [telephoneNumber, setTelephoneNumber] = useState('');
  const { cartItems } = route.params;
  const navigation = useNavigation(); 
  const handleSubmit = async () => {
    const order = {
      fullName,
      address,
      town,
      telephoneNumber: parseInt(telephoneNumber), // Ensure phone number is a number
    };
  
    try {
      const body = JSON.stringify(order);
      console.log('Submitting order:', body);
  
      const response = await fetch('http://192.168.8.157:8080/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Order submitted successfully:', data);
      } else {
        const errorText = await response.text();
        console.error('Unexpected response format:', response.status, response.statusText, errorText);
        console.log('Response headers:', response.headers);
        console.log('Response body:', errorText);
      }
    } catch (error) {
      console.error('Error submitting order:', error);
    }
  };
  
  


  // Calculate total price of all items
  const totalPrice = cartItems.reduce((total, item) => total + item.total, 0);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemDescription}>{item.description}</Text>
        <Text style={styles.itemPrice}>Price: ${item.price}</Text>
        <Text >Size: {item.size}</Text>
        <Text style={styles.itemQuantity}>Quantity: {item.count}</Text>
        <Text style={styles.itemTotal}>Total: ${item.total}</Text> 
      </View>
    </View>
  );
  

  return (
    <View style={styles.container}>
      <View style={styles.arrocontainer}>
      <TouchableOpacity
          style={styles.arrow}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Your Order Shoes</Text>
        </View>
      </View>
      <FlatList
        data={cartItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
      <Text style={styles.totalText}>Total Price: ${totalPrice.toFixed(2)}</Text>

      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={styles.input}
        value={fullName}
        onChangeText={setFullName}
        placeholder="Enter your full name"
      />

      <Text style={styles.label}>Address</Text>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={setAddress}
        placeholder="Enter your address"
      />

      <Text style={styles.label}>Town</Text>
      <TextInput
        style={styles.input}
        value={town}
        onChangeText={setTown}
        placeholder="Enter your town"
      />

      <Text style={styles.label}>Telephone Number</Text>
      <TextInput
        style={styles.input}
        value={telephoneNumber}
        onChangeText={setTelephoneNumber}
        placeholder="Enter your telephone number"
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  arrocontainer:{
    flexDirection:'row',
    marginTop:20
  },
  arrow: {
    borderColor:'#0B95BE',
    borderWidth:3,
    borderRadius:50,
    backgroundColor:'#0B95BE',
    width:50,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    marginRight:25,
  },
  titleContainer:{
    marginTop:8,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'white',
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  itemImage: {
    width: 75,
    height: 80,
    resizeMode: 'contain',
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemDescription: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
    marginBottom: 5,
  },
  itemQuantity: {
    fontSize: 16,
    marginBottom: 5,
  },
  itemTotal: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalText: {
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 10,
    color:'white',
    textAlign:'center'
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color:'white',
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor:'white'
  },
  button: {
    backgroundColor: '#0B95BE',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default SubmitForm;

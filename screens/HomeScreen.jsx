import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Image1 from '../assets/images/adidas/a1.png';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <View style={styles.imageContainer}>
        <View style={styles.imageTextContainer}>
          <Image source={Image1} style={styles.image} />
          <Text style={styles.textDescription}>White and black lether adidas</Text>
          <Text style={styles.textPrice}>100$</Text>
        </View>
        <View style={styles.imageTextContainer}>
          <Image source={Image1} style={styles.image} />
          <Text style={styles.textDescription}>White and black lether leass adidas</Text>
          <Text style={styles.textPrice}>120$</Text>
        </View>
      </View>
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff', 
  },
  imageContainer: {
    flexDirection: 'row',
    marginVertical: 10, 
  
  },
  imageTextContainer:{
    flexDirection:'column',
    alignItems:'center',
    justifyContent:"center",
    height:120,
    width:170,
    padding:10,
  },
  image: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
    paddingRight:10, 
  },
  textDescription:{
    fontSize:15,
    textAlign:'center',
  },
  textPrice:{
    fontSize:20,
    textAlign:'center',
    fontWeight:'900',
  },
  
});

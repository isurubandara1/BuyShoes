import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Animated,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get("window");

const FirstPage = () => {
  const fadeAnim = new Animated.Value(0);
  const translateYAnim = new Animated.Value(50);
  const navigation = useNavigation();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    Animated.timing(translateYAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/FirstPage.jpg")}
        style={styles.image}
        resizeMode="stretch"
      />
      <View style={styles.overlay}>
        <Animated.View
          style={[
            styles.animatedContainer,
            { opacity: fadeAnim, transform: [{ translateY: translateYAnim }] },
          ]}
        >
          <Text style={styles.title}>
            Welcome to your one-stop destination for shoe bliss. Dive into a
            style meets comfort step.
          </Text>
          <Text style={styles.subtitle}>Let's start shopping!</Text>
        </Animated.View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.googlebutton]}>
            <Image  style={styles.googleImage} source={require("../assets/images/Google.png")}/>
            <Text style={styles.buttonText}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: width,
    height: height,
    opacity: 0.8,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 20,
  },
  animatedContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#fff",
    paddingLeft: 2,
    paddingRight: 2,
  },
  subtitle: {
    fontSize: 19,
    textAlign: "center",
    marginBottom: 20,
    color: "#fff",
  },
  buttonContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0B95BE",
    borderRadius: 10,
    marginBottom: 10,
    width: width - 30,
    height: 50,
    justifyContent: "center",
  },
  googlebutton:{
    flexDirection:"row",
     alignItems:'center', 
  },
  googleImage:{
    resizeMode:'cover',
    width:35,
    height:35,
    marginRight:15,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default FirstPage;

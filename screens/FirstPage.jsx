import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

const FirstPage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/FirstPage.jpg")}
        style={styles.image}
        resizeMode='stretch'
      />
      <View style={styles.overlay}>
        <Text style={styles.title}>
          Welcome to your one-stop destination for shoe bliss. Dive into a
          style meets comfort step.
        </Text>
        <Text style={styles.subtitle}>Let's start shopping!</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
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
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent black overlay
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 20,
  },
  title: {
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#fff", 
    paddingLeft:2,
    paddingRight:2,
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
    width: width - 25,
    height: 50,
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default FirstPage;

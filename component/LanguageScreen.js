import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LanguageScreen = () => {
  const navigation = useNavigation();

  const goToHomeScreen = () => {
    navigation.navigate("HomeScreen");
  };

  const goToHomeThird = () => {
    navigation.navigate("HomeThird");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Language-Til</Text>

      <TouchableOpacity style={styles.button} onPress={goToHomeScreen}>
        <Image source={require('../assets/2.png')} style={styles.icon} />
        <Text style={styles.buttonText}>English</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={goToHomeThird}>
        <Image source={require('../assets/1.jpg')} style={styles.icon} />
        <Text style={styles.buttonText}>Uzbek </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    maxWidth: '100%',
    width:400,
    flexDirection: "row",
    borderRadius:8,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginBottom: 10,
  },
  icon: {
    width: 80,
    height: 50,
    borderRadius:8,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
  },
});

export default LanguageScreen;

import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const GetStartedScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handleNavigation = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.shadow}>
        <Text style={styles.title}>{`Angola \n país \n grande \n e belo`}</Text>
      </View>
      <View style={styles.logo}>
        <Image source={require('../Assets/Image/1.jpg')} style={styles.image} />
      </View>
      <TouchableOpacity onPress={handleNavigation} style={styles.button}>
        <Text style={styles.subtitle}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 64,
  },
  logo: {
    width: "100%",
    height: "78.3%",
    borderBottomRightRadius: 90,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    transform: [{ translateX: -260 }],
  },
  title: {
    fontSize: 40,
    color: "#ffffff",
    marginTop: 145,
    marginLeft: 30,
  },
  subtitle: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#ee032c",
    borderRadius: 30,
    paddingBottom: 12,
    paddingTop: 12,
    width: 250,
  },
  shadow: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 18,
    color: 'red',
    zIndex: 2,
    width: "100%",
    height: "78.3%",
    justifyContent: 'center',
    borderBottomRightRadius: 90,
    backgroundColor: "#ee032a43",
  },
});

export default GetStartedScreen;

import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import axios from 'axios';

import Province from '../Components/Province';

interface ProvinceProps {
  id: string;
  nome: string;
}

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [provinces, setProvinces] = useState<ProvinceProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://angolaapi.onrender.com/api/v1/geography/provinces");
        setProvinces(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleNavigation = (provinceName: string) => {
    navigation.navigate('MunicipeScreen', { province: provinceName });
  };

  return (
    <View style={styles.container}>
      <View style={styles.shadow}>
        <Text style={styles.subtitleStyle}>UM DOS</Text>
        <Text style={styles.titleStyle}>MAIORES DE ÁFRICA</Text>
      </View>
      <View style={styles.logo}>
        <Image source={require('../Assets/Image/2.jpg')} style={styles.image} />
      </View>
      <FlatList
        style={styles.list}
        data={provinces}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <Province
            name={item.nome}
            backgroundColor={index % 2 === 0 ? '#cc092f' : '#111'}
            handleNavigation={() => handleNavigation(item.nome)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 48,
  },
  logo: {
    width: "100%",
    height: "25%",
    borderBottomRightRadius: 90,
    overflow: 'hidden',
  },
  list: {
    width: "80%",
  },
  image: {
    flex: 1,
    transform: [{ translateX: -480 }],
  },
  subtitleStyle: {
    fontSize: 20,
    color: "#ffffff",
    marginTop: 96,
  },
  titleStyle: {
    marginTop: 8,
    color: "#F9FAFB",
    fontSize: 32,
  },
  shadow: {
    paddingLeft: 32,
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 18,
    color: 'red',
    zIndex: 2,
    width: "100%",
    height: "25%",
    justifyContent: 'center',
    borderBottomRightRadius: 90,
    backgroundColor: "#ee032a43",
  }
});

export default HomeScreen;

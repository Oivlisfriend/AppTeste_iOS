import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import Municipe from '../Components/Municipe';

interface municipeProps {
  id: string;
  nome: string;
  descricao: string;
  provincia: string;
}
interface RouteParams {
  province: string;
}
const MunicipeScreen = () => {

  const muni = [
    {
      "id": "6032c086c5686966bcc04270",
      "descricao": "",
      "nome": "Belas",
      "provincia": "Luanda"
    },
    {
      "id": "6032c086c5686966bcc04271",
      "descricao": "",
      "nome": "Cacuaco",
      "provincia": "Luanda"
    },
    {
      "id": "6032c086c5686966bcc04272",
      "descricao": "",
      "nome": "Cazenga",
      "provincia": "Luanda"
    },
    {
      "id": "6032c086c5686966bcc04273",
      "descricao": "",
      "nome": "Ícolo e Bengo",
      "provincia": "Luanda"
    },
    {
      "id": "6032c086c5686966bcc04274",
      "descricao": "",
      "nome": "Luanda",
      "provincia": "Luanda"
    },
    {
      "id": "6032c086c5686966bcc04275",
      "descricao": "",
      "nome": "Quilamba Quiaxi",
      "provincia": "Luanda"
    },
    {
      "id": "6032c086c5686966bcc04276",
      "descricao": "",
      "nome": "Quissama",
      "provincia": "Luanda"
    },
    {
      "id": "6032c086c5686966bcc04277",
      "descricao": "",
      "nome": "Talatona",
      "provincia": "Luanda"
    },
    {
      "id": "6032c086c5686966bcc04278",
      "descricao": "",
      "nome": "Viana",
      "provincia": "Luanda"
    }
  ]

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [municipe, setMunicipe] = useState([]);
  const route = useRoute();
  const { province } = route.params as RouteParams;

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("https://angolaapi.onrender.com/api/v1/geography/county?provincia=" + province);
        setMunicipe(response.data);
        console.log(response.data)
      } catch (error) {
        console.log(error);
      }
    })()
  }, [])
  const handleNavigation = () => {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleNavigation} style={styles.back}>
          <Ionicons name="chevron-back" size={32} color="white" />
        </TouchableOpacity>
        <View>
          <Text style={styles.titleStyle}>
            {province.toUpperCase()}
          </Text>
          <Text style={styles.subtitleStyle}>
            MUNICÍPIOS
          </Text>
        </View>
      </View>
      <FlatList
        style={styles.list}
        data={muni}
        keyExtractor={(item: municipeProps) => item.id.toString()}
        renderItem={({ item, index }) => (
          <Municipe
            name={item.nome} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: 48,
  },
  header: {
    width: "100%",
    height: "25%",
    borderBottomRightRadius: 90,
    backgroundColor: "#cc092f",
    paddingLeft: 18,
    gap: 64
  },
  list: {
    width: "80%"
  },
  subtitleStyle: {
    fontSize: 20,
    color: "#ffffff",
    marginTop: 8,
  },
  back: {
    marginTop: "8%",
  },
  titleStyle: {
    color: "#F9FAFB",
    fontSize: 32,
  },
});


export default MunicipeScreen;

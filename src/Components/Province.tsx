import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

interface Props {
  name: string;
  handleNavigation: () => void;
  backgroundColor: string;
}

const Province = ({ name, handleNavigation, backgroundColor }: Props) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.categoryItem, { backgroundColor }]}
        onPress={handleNavigation}
      >
        <Text style={styles.textItem}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryItem: {
    padding: 40,
    marginTop: 24,
    borderRadius: 16,
  },
  textItem: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Province;

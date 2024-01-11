import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

interface Props {
    name: string;
}

const Municipe = ({ name }: Props) => {
    return (
        <View>
            <TouchableOpacity style={styles.categoryItem}>
                <Text style={styles.textItem}>{name}</Text>
            </TouchableOpacity>
            <View style={styles.separator} />
        </View>
    );
};

const styles = StyleSheet.create({
    categoryItem: {
        marginTop: 16,
        borderRadius: 16,
    },
    textItem: {
        color: '#111',
        fontSize: 16,
    },
    separator: {
        height: 1,
        backgroundColor: '#cc092f',
        marginVertical: 10,
    },
});

export default Municipe;

import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, ScrollView } from "react-native";
import data from '../data/aliments.json';

const ModalDetails = () => {

    const [receipData, setReceipData] = useState(data[0]);

    return (
        <View>
            <Image
                style={styles.image}
                source={{
                    uri: receipData.image,
                }}
            />
            <Text>{receipData.category}</Text>
            <Text>{receipData.name}</Text>
            <Text>{`Ingredients\nfor ${receipData.servings} servings`}</Text>
            <FlatList 
                data={receipData.ingredients}
                renderItem={({ item }) => (
                    <ScrollView>
                        <View>
                            <Text>{item.name}</Text>
                            <Text>{`${item.quantity} ${item.unit}`}</Text>
                        </View>
                    </ScrollView>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 158,
        height: 180,
        borderRadius: 10
    },
});

export default ModalDetails;

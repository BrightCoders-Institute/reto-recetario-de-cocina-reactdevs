import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, ScrollView, Modal, Button } from 'react-native';
import data2 from '../data/aliments.json';

const ModalDetails = ({ visible, setIsModalDetailOpen, data }) => {

    const [receipData, setReceipData] = useState(data);

    return (
        <Modal visible={ visible } animationType='slide'>
            <View>
                <View style={styles.imageContainer}>
                    <Button title='X' onPress={() => setIsModalDetailOpen(false)} />
                    <Image
                        style={styles.image}
                        source={{
                            uri: receipData.image,
                        }}
                    />
                    <Text>{receipData.status.toUpperCase()}</Text>
                    <Text>{receipData.name}</Text>
                </View>
                
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
        </Modal>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        // backgroundColor: 'red',
    },
    image: {
        width: '100%',
        height: '50%',
        opacity: .5,
        backgroundColor: 'black',
    },
});

export default ModalDetails;

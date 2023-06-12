import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, FlatList, StyleSheet, ScrollView, Modal, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ModalDetails = ({ visible, setIsModalDetailOpen, data }) => {

    const [receipData, setReceipData] = useState(data);
    
    const windowHeight = Dimensions.get('window').height;
    const imageHeight = windowHeight * 0.50;

    return (
        <Modal visible={ visible } animationType='slide'>
            <ImageBackground
                source={{ uri: receipData.image }}
                style={[styles.backgroundImage, { height: imageHeight }]}
            >
                <View style={styles.overlay}>
                    <View style={styles.iconContainer}>
                        <Icon name="remove" size={35} color="white" onPress={() => setIsModalDetailOpen(false)}/>
                    </View>
                    <View>
                        <Text style={styles.text}>{receipData.status.toUpperCase()}</Text>
                        <Text style={[styles.text, {fontWeight: 'bold'}]}>{receipData.name}</Text>
                    </View>
                </View>
            </ImageBackground>
            <View>                
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
    container: {
        flex: 1,
    },
    backgroundImage: {
        resizeMode: 'cover',
        // opacity: .5,
    },
    overlay: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingBottom: 40,
        paddingLeft: 25,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
    },
    text: {
        fontSize: 22,
        color: 'white',
    },
});

export default ModalDetails;

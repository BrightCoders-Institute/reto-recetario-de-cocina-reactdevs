import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, FlatList, StyleSheet, ScrollView, Modal, Dimensions, Pressable } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faRemove, faHeart} from '@fortawesome/free-solid-svg-icons';

const ModalDetails = ({ visible, setIsModalDetailOpen, data }) => {

    const [receipData, setReceipData] = useState(data);
    const [isLiked, setIsLiked] = useState(false);
    
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
                        {/* <Icon name="remove" size={35} color="white" onPress={() => setIsModalDetailOpen(false)}/> */}
                        <Pressable onPress={() => setIsModalDetailOpen(false)}>
                            <FontAwesomeIcon size={35} icon={faRemove} color='white'  />
                        </Pressable>
                    </View>
                    <View>
                        <Text style={styles.imageText}>{receipData.status.toUpperCase()}</Text>
                        <Text style={[styles.imageText, {fontWeight: 'bold'}]}>{receipData.name}</Text>
                    </View>
                        <Pressable
                            style={styles.likeButton}  
                            onPress={() => setIsLiked(!isLiked)}
                        >
                            <FontAwesomeIcon 
                                icon={faHeart} 
                                size={24}
                                color={isLiked ? "red" : "white"}  
                            /> 
                        </Pressable>
                </View>
            </ImageBackground>
            
            <View style={styles.textContainer}>
                <Text style={styles.textContent}>{`Ingredients\nfor ${receipData.servings} servings`}</Text>
                <ScrollView >
                    { receipData.ingredients.map((item) => (
                        <View style={styles.ingredients} id={item.name} key={item.name}>
                            <Text style={{fontSize: 15, color: 'white'}}>{item.name}</Text>
                            <Text style={{fontSize: 15, color: 'white'}}>{`${item.quantity} ${item.unit}`}</Text>
                        </View>
                    ))}
                </ScrollView>
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
        opacity: .8,
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
        paddingTop: 30,
    },
    imageText: {
        fontSize: 22,
        color: 'white',
    },
    ingredients: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
        height: 50,
        borderBottomWidth: .5,
        borderBottomColor: 'gray',
    },
    textContainer: {
        marginBottom: 500, 
        backgroundColor: '#413F3F'
    },
    textContent: {
        marginLeft: 20,
        marginTop: 15,
        marginBottom: 15,
        fontSize: 18,
        color: 'white'
    },
    likeButton: {
        position: 'absolute',  
        top: 30,
        right: 20,  
        padding: 8,
    }
});

export default ModalDetails;

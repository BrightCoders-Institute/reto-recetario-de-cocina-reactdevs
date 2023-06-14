import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import ModalDetails from './ModalDetails';
import { useState } from 'react';

const ListItem = ({ dish, dimensions }) => {

  const [isModalDetailOpen, setIsModalDetailOpen] = useState(false);

  return (
      <TouchableOpacity style={styles.itemContainer} onPress={() => setIsModalDetailOpen(true)}>
        <ModalDetails
          visible={isModalDetailOpen} 
          setIsModalDetailOpen={setIsModalDetailOpen} 
          data={dish} 
        />

        <Image source={{uri: dish.image}} style={[styles.itemImage, dimensions]}  />

        <Text style={styles.itemText}>{dish.name}</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    itemContainer: {
      // alignItems: 'center',
      marginRight: 40,
      marginTop: 20,
    },
    itemImage: {
      borderRadius: 10,
    },
    itemText: {
      fontWeight: 'bold',
      color: 'black',
      marginTop: 5,
      fontSize: 15
    },
});

export default ListItem;
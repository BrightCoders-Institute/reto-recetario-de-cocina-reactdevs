import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import ModalDetails from './ModalDetails';
import { useState } from 'react';

const ListItem = ({ dish }) => {

  const [isModalDetailOpen, setIsModalDetailOpen] = useState(false);

  console.log(isModalDetailOpen);

  return (
      <TouchableOpacity style={styles.itemContainer} onPress={() => setIsModalDetailOpen(true)}>
        <ModalDetails visible={isModalDetailOpen} />
        <Image source={{uri: dish.image}} style={styles.itemImage}  />
        <Text style={styles.itemText}>{dish.name}</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    itemContainer: {
      alignItems: 'center',
      marginRight: 40,
      marginTop: 20,
    },
    itemImage: {
      width: 150,
      height: 150,
      borderRadius: 10,
    },
    itemText: {
      marginTop: 5,
      fontWeight: 'bold',
      color: 'black',
    },
});

export default ListItem;
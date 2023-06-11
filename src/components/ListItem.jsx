import { View, Text, Image, StyleSheet } from 'react-native';

const ListItem = ({ dish }) => {
    return (
        <View style={styles.itemContainer}>
          <Image source={{uri: dish.image}} style={styles.itemImage}  />
          <Text style={styles.itemText}>{dish.name}</Text>
        </View>
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
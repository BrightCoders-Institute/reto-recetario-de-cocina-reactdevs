import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ListItem from './ListItem';

const HorizontalList = ({receta}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.listTitle}>{(receta[0].status.toUpperCase())}</Text>

      <FlatList
        data={receta}
        renderItem={({ item }) => <ListItem dish={ item } />}
        keyExtractor={(item) => item.id.toString()}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  listTitle: {
    fontSize: 25,
    marginTop: 25,
    fontWeight: 'bold',
    color: 'black',
  }
});

export default HorizontalList;
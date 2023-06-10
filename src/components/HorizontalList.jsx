import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import aliments from '../data/aliments.json';

const List = ({ aliment }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={{uri: aliment.image}} style={styles.itemImage}  />
      <Text style={styles.itemText}>{aliment.name}</Text>
    </View>
  );
};

const HorizontalList = () => {
  const trendAliments = aliments.filter((aliment) => aliment.status === "trend");

  return (
    <View style={styles.container}>
      <FlatList
        data={trendAliments}
        renderItem={({ item }) => <List aliment={item} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal
      />
    </View>
  );
};

const HorizontalListTwo = () => {
  const recentAliments = aliments.filter((aliment) => aliment.status === "recent");

  return (
    <View style={styles.containertwo}>
      <FlatList
        data={recentAliments}
        renderItem={({ item }) => <List aliment={item} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal
      />
    </View>
  );
};

const styles = {
  container: {
    marginBottom: 10,
  },
  containertwo: {
    marginTop: 10,
  },
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
};

export default HorizontalList;
export { HorizontalListTwo };
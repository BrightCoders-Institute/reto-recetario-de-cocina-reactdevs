import React from 'react';
import { SafeAreaView, View, StyleSheet, TextInput } from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMicrophone,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

function SearchBar() {
  return (
  <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <FontAwesomeIcon icon={faMagnifyingGlass} style={styles.lupa} name="search" size={15} color="black"/>
        <TextInput
          style={styles.searchInput}
          placeholderTextColor="black"
          placeholder="What do you want to eat?"
        />
      </View>   
      <FontAwesomeIcon icon={faMicrophone} name="microphone" size={20} color="black"/>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: 'space-between',
      alignItems: "center",
      backgroundColor: 'pink',
      borderRadius: 30,
      marginHorizontal: 45,
      paddingHorizontal:10,
      paddingVertical:5,
      marginTop:55,
    },
    searchContainer: {
      flexDirection: 'row'
    },
    searchInput: {
      color: "black",
      paddingLeft: 10,
    },
    lupa:{
      paddingTop: 5,
    },
  });

export default SearchBar;
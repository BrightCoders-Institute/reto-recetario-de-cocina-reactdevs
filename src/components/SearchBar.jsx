import React from 'react';
import { SafeAreaView, View, StyleSheet, TextInput } from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMicrophone,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

function SearchBar() {
  return (
  <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <FontAwesomeIcon icon={faMagnifyingGlass} style={styles.lupa} name="search" size={15} color="white"/>
        <TextInput
          style={styles.searchInput}
          placeholderTextColor="white"
          placeholder="What do you want to eat?"
        />
      </View>   
      <FontAwesomeIcon icon={faMicrophone} name="microphone" size={20} color="white"/>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      paddingLeft: 10,
      paddingRight: 10, 
      borderWidth: 2,
      borderColor: '#585555',
      borderRadius: 2,
      flexDirection: "row",
      justifyContent: 'space-between',
      alignItems: "center",
      backgroundColor: '#585555',
      textAlign: 'left',
      fontSize: 12,
      borderRadius: 10,
      paddingHorizontal: 20,
      paddingVertical: 7,
    },
    searchContainer: {
      flexDirection: 'row'
    },
    searchInput: {
      color: "white",
      paddingLeft: 10,
    },
    lupa:{
      paddingTop: 5,
    },
  });

export default SearchBar;
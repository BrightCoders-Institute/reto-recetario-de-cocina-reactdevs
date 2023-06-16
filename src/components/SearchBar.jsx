import React from 'react';
import { SafeAreaView, View, StyleSheet, TextInput } from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMicrophone,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

function SearchBar() {
  return (
  <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <FontAwesomeIcon 
          icon={faMagnifyingGlass} 
          style={styles.lupa} 
          name="search" size={15} 
          color="white"
        />
        <TextInput
          style={styles.searchInput}
          placeholderTextColor="white"
          placeholder="What do you want to eat?"
        />
      </View>   
      <FontAwesomeIcon 
        icon={faMicrophone} 
        name="microphone" 
        size={20} 
        color="white"
      />
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      borderWidth: 2,
      borderColor: '#4f4d4d',
      borderRadius: 2,
      flexDirection: "row",
      justifyContent: 'space-between',
      alignItems: "center",
      backgroundColor: '#4f4d4d',
      textAlign: 'left',
      fontSize: 12,
      borderRadius: 10,
    },
    searchContainer: {
      flexDirection: 'row'
    },
    searchInput: {
      color: "black",
      paddingLeft: 10,
    },
  });

export default SearchBar;
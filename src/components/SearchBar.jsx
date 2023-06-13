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
      marginTop: 20,
      paddingLeft: 10,
      paddingRight: 10, 
      borderWidth: 2,
      borderColor: '#20232a',
      borderRadius: 2,
      flexDirection: "row",
      justifyContent: 'space-between',
      alignItems: "center",
      backgroundColor: 'white',
      textAlign: 'left',
      fontSize: 12,
      borderRadius: 30,
      paddingHorizontal:10,
      paddingVertical:5,
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
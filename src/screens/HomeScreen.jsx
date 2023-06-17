import { StyleSheet, View } from "react-native";
import HorizontalList from "../components/HorizontalList";
import data from ".././data/aliments.json";
import { useState } from 'react';
import SearchBar from "../components/SearchBar";

const HomeScreen = () => {

  const [receipData, setReceipData] = useState(data);

  const trendAliments = data.filter((aliment) => aliment.status === "trending");
  const recentAliments = data.filter((aliment) => aliment.status === "recent");

  return (
      <View style={styles.container} testID='homeScreen'>
        <SearchBar/>
        <HorizontalList receta={trendAliments} dimensions={{width: 140, height: 140 }} />
        <HorizontalList receta={recentAliments} dimensions={{width: 190, height: 240 }} />
      </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: '#413F3F',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default HomeScreen;

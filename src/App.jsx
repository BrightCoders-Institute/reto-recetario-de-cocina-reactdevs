import { StyleSheet, Text, View, } from 'react-native';
import HorizontalList from './components/HorizontalList';
import data from '../src/data/aliments.json';
import { useState } from 'react';

const App = () => {

  const [receipData, setReceipData] = useState(data);

  const trendAliments = data.filter((aliment) => aliment.status === "trending");
  const recentAliments = data.filter((aliment) => aliment.status === "recent");

  // console.log(trendAliments);
  // console.log(recentAliments);

  return (
      <View style={styles.container}>

        <Text style={styles.title}>
          Recetario de Cocina
        </Text>

        <HorizontalList receta={trendAliments} />

        <HorizontalList receta={recentAliments} />
      </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
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

export default App;
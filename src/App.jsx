import { StyleSheet, Text, View, } from 'react-native';
import HorizontalList from './components/HorizontalList';
import { HorizontalListTwo } from './components/HorizontalList';

const App = () => {

  return (
    <>

      <View style={styles.container}>
        <Text style={styles.title}>
          Recetario de Cocina
        </Text>
        <Text style={styles.listTitle}>Trending</Text>
        <HorizontalList/>
        <Text style={styles.listTitle}>Recent</Text>
        <HorizontalListTwo/>
      </View>

    </>

  )

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
  listTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
  }
})

export default App;
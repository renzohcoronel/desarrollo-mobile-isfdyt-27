import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CardComponent } from '../components/CardComponent';

export default function App() { 

  return (
    <View style={styles.container}>
      <CardComponent name="Renzo" />
      <Text>Hello world!!!</Text>
      <StatusBar style="auto" />
      <CardComponent name="Pedro" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

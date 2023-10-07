import { Text, SafeAreaView, StyleSheet } from 'react-native';

import { Imc } from './components/Imc';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
       Cálculadora de IMC
      </Text>      
        <Imc/>      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000',
    padding: 8,
  },
  paragraph: {
    margin: 4,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fffad0'
  },
});

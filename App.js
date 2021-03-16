import React, {useState} from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

export default function App() {
    const[outputText, setOutputText] = useState('Open up App.js to start working on your app !');
    return (
      <View style={styles.container}>
        <Text>{outputText}</Text>
        <Button title="Change Text" onPress={() => setOutputText('The text changed')} style={styles.button}/>
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
  logo: {
    width: 334,
    height: 332,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('nandom');
  const [age, setAge] = useState('36');
  const [person, setPerson] = useState({ name: 'Makario', age: 55 });

  const clickHandler = () => {
    setName("Nandom Kumchi");
    setPerson({ name: 'Efemena Alex', age: 82 })
  }

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput multiline style={styles.input} placeholder="e.g John Doe"
        onChangeText={(value) => setName(value)} />

      <Text>Enter Age:</Text>
      <TextInput keyboardType='numeric' style={styles.input} placeholder="e.g 45"
        onChangeText={(value) => setAge(value)} />
      <Text>name: {name}, age: {age}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#ff00ff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    backgroundColor: 'pink',
    padding: 30,
  },
  boldText: {
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20
  },
  buttonContainer: {
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 8,
    margin: 10,
    width: 250
  }
});

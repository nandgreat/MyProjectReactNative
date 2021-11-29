import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('nandom');
  const [person, setPerson] = useState({ name: 'Makario', age: 55 });

  const clickHandler = () => {
    setName("Nandom Kumchi");
    setPerson({name: 'Efemena Alex', age: 82})
  }

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>My Brother's name is {person.name} and his age is {person.age}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Update State" onPress={clickHandler} />
      </View>
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
  }
});

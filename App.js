import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [people, setPeople] = useState([
    { name: 'Sophia', id: '37' },
    { name: 'Plangnan', id: '9' },
    { name: 'Nandom', id: '65' },
    { name: 'Angir', id: '24' },
    { name: 'Fwangzeen', id: '12' },
    { name: 'Pebang', id: '25' },
    { name: 'Makario', id: '51' },
    { name: 'Sophia', id: '31' },
    { name: 'Plangnan', id: '79' },
    { name: 'Nandom', id: '69' },
    { name: 'Angir', id: '28' },
    { name: 'Fwangzeen', id: '14' },
    { name: 'Pebang', id: '20' },
    { name: 'Makario', id: '55' },
  ]);

  return (
    <View style={styles.container}>

      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          (
            <View style={styles.itemStyle}>
              <Text style={styles.listStyle}>
                {item.name}
              </Text>
            </View>
          )
        )}
      />

      {/* <ScrollView>
        {people.map(item => {
          return (
            <View style={styles.itemStyle}>
              <Text style={styles.listStyle}>
                {item.name}
              </Text>
            </View>
          )
        })}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 15.0,
    color: '#ff00ff',
    paddingHorizontal: 22
  },
  listStyle: {
    fontSize: 28.0,
    color: 'red'
  },
  itemStyle: {
    backgroundColor: 'pink',
    margin: 10,
    padding: 10
  }
});

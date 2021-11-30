import React, { useState } from 'react';
import { StyleSheet, Text, FlatList, Alert, View, Keyboard, TouchableWithoutFeedback, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {

    const [reviews, setReviews] = useState([
        { title: "Zelda, Breath of Fresh Air", rating: 5, body: 'Lorem ipsum', key: '1' },
        { title: "Gotta Catch Them All (again)", rating: 4, body: 'Lorem ipsum', key: '2' },
        { title: "Not so 'Final' Fantasy", rating: 3, body: 'Lorem ipsum', key: '3' }
    ])

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={reviews}
                keyExtractor={(item) => item.key}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate("ReviewDetails", item)}>
                        <Text style={globalStyles.titleText}>
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
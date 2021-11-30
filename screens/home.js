import React, { useState } from 'react';
import { StyleSheet, Text, Alert, View, Keyboard, TouchableWithoutFeedback, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {


    const pressHandler = () => {
        // navigation.navigate('ReviewDetails')
        navigation.push('ReviewDetails')
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Welcome Home Screeners</Text>
            <Button title="Go to Review Dets" onPress={pressHandler} />
        </View>
    );
}
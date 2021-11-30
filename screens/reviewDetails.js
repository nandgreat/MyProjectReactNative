import React, { useState } from 'react';
import { StyleSheet, Text, Alert, View, Keyboard, TouchableWithoutFeedback, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({navigation}) {

    const pressHandler = () => {
        navigation.goBack();
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Welcome Review Details Screen</Text>
            <Button title="Back to Home Screen" onPress={pressHandler} />
        </View>
    );
}
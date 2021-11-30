import React, { useState } from 'react';
import { StyleSheet, Text, Alert, View, Keyboard, TouchableWithoutFeedback } from 'react-native';

export default function AboutUs() {

    return (
        <View style={styles.container}>
            <Text>Welcome Home</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        flex: 1,
        padding: 40,
    },
    list: {
        flex: 1,
        marginTop: 20,
    },
});
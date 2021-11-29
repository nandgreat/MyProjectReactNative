import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Sandbox() {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        paddingTop: 40,
        backgroundColor: '#ddd'
    },
    boxOne: {
        flex: 1,
        backgroundColor: 'violet',
        padding: 10
    },
    boxTwo: {
        flex: 2,
        backgroundColor: 'gold',
        padding: 20
    },
    boxThree: {
        flex: 1,
        backgroundColor: 'coral',
        padding: 30
    },
    boxFour: {
        backgroundColor: 'skyblue',
        padding: 40
    }
});


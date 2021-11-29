import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';


export default function TodoItem({ item, pressHandler }) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                <MaterialIcons name='delete' size={18} color='#444' />
                <Text style={styles.itemText}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        padding: 16,
        marginTop: 16,
        borderColor: '#ccc',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    },
    itemText: {
        marginLeft: 10
    }
})

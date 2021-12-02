import React, { useState } from 'react';
import { Text, FlatList, View, Modal, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Card from '../shared/card';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons'

export default function Home({ navigation }) {

    const [modalOpen, setModalOpen] = useState(false);

    const [reviews, setReviews] = useState([
        { title: "Zelda, Breath of Fresh Air", rating: 5, body: 'Lorem ipsum', key: '1' },
        { title: "Gotta Catch Them All (again)", rating: 4, body: 'Lorem ipsum', key: '2' },
        { title: "Not so 'Final' Fantasy", rating: 3, body: 'Lorem ipsum', key: '3' }
    ]);

    return (
        <View style={globalStyles.container}>

            <Modal visible={modalOpen} animationType='slide'>
                <View style={styles.modalContent}>
                    <MaterialIcons
                        name='close'
                        size={24}
                        style={[styles.modalToggle, styles.modalClose]}
                        onPress={() => setModalOpen(false)}
                    />

                    <Text>Hello from modal</Text>
                </View>
            </Modal>

            <MaterialIcons
                name='add'
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
            />

            <FlatList
                data={reviews}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate("ReviewDetails", item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>
                                {item.title}
                            </Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10.0,
        borderWidth: 1,
        borderColor: '#dddddd',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modalClose: {
        marginTop: 20.0,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1
    }
});
import React, { useState } from 'react';
import { StyleSheet, Text, Alert, View, Image, Button } from 'react-native';
import { globalStyles, images} from '../styles/global';
import Card from '../shared/card';

export default function ReviewDetails({ navigation }) {

    const rating = navigation.getParam('rating');

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{navigation.getParam('title')}</Text>
                <Text>{navigation.getParam('body')}</Text>
                <View style={styles.myrating}>
                    <Text>GameZone rating: </Text>
                    <Image style={{ width: rating * 21, height: 21 }} source={images.ratings[rating]} />
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    myrating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16.0,
        marginTop: 16.0,
        borderTopWidth: 1,
        borderTopColor: '#eee'

    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    }
})
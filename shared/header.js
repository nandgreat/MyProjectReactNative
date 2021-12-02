import React from "react";
import { StyleSheet, Text, Image, View, ImageBackground } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { images } from "../styles/global";

export default function Header({ title, navigation }) {

    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
            <View style={styles.header}>
                <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
                <View style={styles.headerTitle}>
                    <Image source={require('../assets/heart_logo.png')} style={styles.headerImage} />

                    <Text style={styles.headerText}>{title}</Text>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerImage: {
        height: 26.0,
        width: 26.0,
        marginHorizontal: 10
    },
    headerTitle: {
        flexDirection: 'row',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 16
    }
})
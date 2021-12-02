import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import AboutUs from '../screens/about';
import Header from '../shared/header';
import { Image } from 'react-native';

const screens = {
    About: {
        screen: AboutUs,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='About us' navigation={navigation} />,
                headerBackground: () => <Image source={require('../assets/game_bg.png')} style={{height:60}}/>,

            }
        },
    },
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: 'skyblue', height: 60 }
    }
});

export default AboutStack;
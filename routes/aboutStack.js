import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import AboutUs from '../screens/about';
import Header from '../shared/header';

const screens = {
    About: {
        screen: AboutUs,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='About us' navigation={navigation} />
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
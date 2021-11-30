import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import AboutUs from '../screens/about';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'GameZone',
            headerStyle: { backgroundColor: 'pink' }
        }
    },
    AboutUs: {
        screen: AboutUs
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details',

        }
    },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: 'skyblue' }
    }
});

export default createAppContainer(HomeStack);
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,

    },
    titleText: {
        fontSize: 18,
        color: '#333',
        fontWeight: 'bold'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20
    },
    input: {
        padding: 12.0,
        borderWidth: 1.0,
        borderColor: '#ddd',
        borderRadius: 10.0,
        fontSize: 18,
    },
    buttoners: {
        borderRadius: 10,
        padding: 15.0,
        marginTop: 30.0
    },
    errorText: {
        color: 'crimson',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center'
    }
});

export const images = {
    ratings: {
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png')
    }
}
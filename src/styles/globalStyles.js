import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? 30 : 50,
    },
    text: {
        fontSize: 16,
        color: '#333',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
        color: '#333',
    },
    error: {
        color: 'red',
        marginBottom: 10,
        textAlign: 'center',
    },
});
import { StyleSheet } from 'react-native';

const LoginScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    logo: {
        width: 120,
        height: 120,
        alignSelf: 'center',
        marginBottom: 24,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
        color: '#333',
    },
    redText: {
        color: '#E60023',
    },
    input: {
        backgroundColor: '#f0f0f0',
        padding: 14,
        borderRadius: 10,
        marginBottom: 12,
        fontSize: 16,
        color: '#000',
    },
    button: {
        backgroundColor: '#FFC107',
        paddingVertical: 14,
        borderRadius: 10,
        marginTop: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    secondaryButton: {
        backgroundColor: 'transparent',
        marginTop: 10,
    },
    secondaryButtonText: {
        color: '#444',
        textAlign: 'center',
        fontSize: 14,
        textDecorationLine: 'underline',
    },
    error: {
        color: 'red',
        marginBottom: 8,
        textAlign: 'center',
    },
});

export default LoginScreenStyles;

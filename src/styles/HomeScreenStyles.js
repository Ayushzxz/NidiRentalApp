import { StyleSheet, Platform } from 'react-native';

const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 12,
        paddingTop: Platform.OS === 'android' ? 30 : 50,
    },
    logoSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === 'android' ? 20 : 40,
        paddingBottom: 10,
        backgroundColor: '#fff',
    },
    logo: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        marginRight: 8,
    },
    logoTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    redText: {
        color: '#E60023',
    },
    heroBanner: {
        height: 200,
        width: '100%',
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: 20,
    },
    heroImageStyle: {
        borderRadius: 12,
        resizeMode: 'cover',
    },
    heroContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        padding: 20,
    },
    heroText: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 12,
    },
});

export default homeStyles;

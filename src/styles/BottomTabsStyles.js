import { StyleSheet } from 'react-native';

const BottomTabsStyles = StyleSheet.create({
    tabBarStyle: {
        position: 'absolute',
        height: 70,
        paddingBottom: 10,
        paddingTop: 6,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#fff',
        elevation: 10, // Android shadow
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    tabBarLabel: {
        fontSize: 12,
        fontWeight: '500',
        marginBottom: 4,
    },
});

export default BottomTabsStyles;

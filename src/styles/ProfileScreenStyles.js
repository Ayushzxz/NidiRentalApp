import { StyleSheet } from 'react-native';

const ProfileScreenStyles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        backgroundColor: '#f9fafb',
        justifyContent: 'center',
        padding: 20,
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 24,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 10,
        elevation: 5,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 16,
    },
    name: {
        fontSize: 20,
        fontWeight: '600',
        color: '#111827',
        marginBottom: 4,
    },
    email: {
        fontSize: 14,
        color: '#6b7280',
        marginBottom: 24,
    },
    optionButton: {
        width: '100%',
        paddingVertical: 14,
        borderRadius: 8,
        backgroundColor: '#f3f4f6',
        marginBottom: 10,
        alignItems: 'center',
    },
    optionText: {
        fontSize: 16,
        color: '#111827',
        fontWeight: '500',
    },
    logoutButton: {
        marginTop: 10,
        backgroundColor: '#E60023',
        paddingVertical: 14,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
    },
    logoutButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default ProfileScreenStyles;

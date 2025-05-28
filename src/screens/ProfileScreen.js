import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, Alert, ScrollView } from 'react-native';
import ProfileScreenStyles from '../styles/ProfileScreenStyles';
import { auth } from '../config/firebase';

export default function ProfileScreen({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);

    useEffect(() => {
        const user = auth.currentUser;
        if (user) {
            setName(user.displayName || 'John Doe');
            setEmail(user.email || 'johndoe@example.com');
            setProfilePicture(user.photoURL);
        }
    }, []);

    const handleLogout = () => {
        auth.signOut()
            .then(() => {
                Alert.alert('Logged out successfully!');
                navigation.navigate('Login');
            })
            .catch((error) => {
                Alert.alert('Error', error.message);
            });
    };

    const handleProfilePictureChange = () => {
        Alert.alert('Profile picture change not implemented.');
    };

    return (
        <ScrollView contentContainerStyle={ProfileScreenStyles.scrollContainer}>
            <View style={ProfileScreenStyles.card}>
                <Image
                    source={
                        profilePicture
                            ? { uri: profilePicture }
                            : require('../../assets/default.jpg')
                    }
                    style={ProfileScreenStyles.avatar}
                />
                <Text style={ProfileScreenStyles.name}>{name}</Text>
                <Text style={ProfileScreenStyles.email}>{email}</Text>

                <TouchableOpacity
                    style={ProfileScreenStyles.optionButton}
                    onPress={() => navigation.navigate('EditProfile')}
                >
                    <Text style={ProfileScreenStyles.optionText}>Edit Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={ProfileScreenStyles.optionButton}
                    onPress={() => navigation.navigate('Settings')}
                >
                    <Text style={ProfileScreenStyles.optionText}>Settings</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={ProfileScreenStyles.optionButton}
                    onPress={() => navigation.navigate('HelpSupport')}
                >
                    <Text style={ProfileScreenStyles.optionText}>Help & Support</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={ProfileScreenStyles.logoutButton}
                    onPress={handleLogout}
                >
                    <Text style={ProfileScreenStyles.logoutButtonText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

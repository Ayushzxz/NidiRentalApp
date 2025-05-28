import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import BottomTabs from '../screens/BottomTabs'; // Import BottomTabs navigator
import ListingDetailScreen from '../screens/ListingDetailScreen';
import PaymentScreen from '../screens/PaymentScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{
                    headerShown: false, // Hide headers globally
                }}
            >
                {/* Authentication Screens */}
                <Stack.Screen name="Login" component={LoginScreen} />

                {/* Main App Screens */}
                <Stack.Screen name="Home" component={BottomTabs} />
                <Stack.Screen
                    name="ListingDetail"
                    component={ListingDetailScreen}
                    options={{
                        headerShown: true, // Show header if needed
                        headerTitle: 'Vehicle Details', // Customize header title
                    }}
                />
                <Stack.Screen name="Payment" component={PaymentScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
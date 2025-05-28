import React, { useState } from 'react';
import {
    View,
    TextInput,
    Text,
    Image,
    KeyboardAvoidingView,
    Platform,
    ActivityIndicator,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity,
} from 'react-native';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../config/firebase';
import styles from '../styles/LoginScreenStyles';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        setError('');
        setLoading(true);
        try {
            if (!email || !password) {
                setError('Email and password are required.');
                return;
            }
            if (!/\S+@\S+\.\S+/.test(email)) {
                setError('Please enter a valid email address.');
                return;
            }
            await signInWithEmailAndPassword(auth, email, password);
            navigation.navigate('Home');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleForgotPassword = async () => {
        setError('');
        if (!email) {
            setError('Please enter your email to reset your password.');
            return;
        }
        try {
            await sendPasswordResetEmail(auth, email);
            alert('Password reset email sent!');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <Image
                    source={require('../../assets/Logo.png')}
                    style={styles.logo}
                />
                <Text style={styles.title}>Welcome to Nidi <Text style={styles.redText}>Rentals</Text></Text>

                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize='none'
                    keyboardType='email-address'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                {error ? <Text style={styles.error}>{error}</Text> : null}

                {loading ? (
                    <ActivityIndicator size="large" color="#FFC107" />
                ) : (
                    <>
                        <TouchableOpacity style={styles.button} onPress={handleLogin}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.secondaryButton} onPress={handleForgotPassword}>
                            <Text style={styles.secondaryButtonText}>Forgot Password?</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate('Home')}>
                            <Text style={styles.secondaryButtonText}>Continue as Guest</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate('SignUp')}>
                            <Text style={styles.secondaryButtonText}>Don't have an account? Sign Up</Text>
                        </TouchableOpacity>
                    </>
                )}
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}

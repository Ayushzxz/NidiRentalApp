import React, { useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import homeStyles from '../styles/HomeScreenStyles';
import RideSearchSection from '../components/RideSearchSection';

export default function HomeScreen({ navigation }) {
    const heroImages = [
        require('../../assets/vehicles-images/header1.jpg'),
        require('../../assets/vehicles-images/header2.jpg'),
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [location, setLocation] = useState('MYSORE');
    const [startDate, setStartDate] = useState('27 Mar 2025, 02:30');
    const [endDate, setEndDate] = useState('27 Mar 2025, 20:30');

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleFindVehicles = () => {
        navigation.navigate('VehiclesList', { location, startDate, endDate });
    };

    return (
        <View style={homeStyles.container}>
            {/* Centered Logo Section */}
            <View style={homeStyles.logoSection}>
                <Image
                    source={require('../../assets/Logo.png')}
                    style={homeStyles.logo}
                />
                <Text style={homeStyles.logoTitle}>
                    Nidi <Text style={homeStyles.redText}>Rentals</Text>
                </Text>
            </View>

            {/* Hero Section */}
            <ImageBackground
                source={heroImages[currentImageIndex]}
                style={homeStyles.heroBanner}
                imageStyle={homeStyles.heroImageStyle}
            >
                <View style={homeStyles.heroContent}>
                    <Text style={homeStyles.heroText}>
                        Rent your Favorite{'\n'}vehicle here
                    </Text>
                </View>
            </ImageBackground>

            {/* Filter Section */}
            <RideSearchSection
                location={location}
                setLocation={setLocation}
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
                onFindVehicles={handleFindVehicles}
                vehicles={[]} // Pass the vehicles array here
                setFilteredVehicles={() => { }} // Provide a callback to handle filtered vehicles
            />
        </View>
    );
}

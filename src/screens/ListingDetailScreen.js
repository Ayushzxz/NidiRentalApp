import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ActivityIndicator } from 'react-native';
import ListingDetailScreenStyles from '../styles/ListingDetailScreenStyles';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { localVehicleImages } from '../../assets/extra/localVehicleImages';

export default function ListingDetailScreen() {
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'vehicleQuantityList'));
                const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                console.log('Fetched vehicles:', data);
                setVehicles(data);
            } catch (error) {
                console.error('Error fetching vehicles:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchVehicles();
    }, []);

    const renderItem = ({ item }) => (
        <View style={ListingDetailScreenStyles.card}>
            <Image
                source={
                    localVehicleImages[item.name]
                        ? localVehicleImages[item.name]
                        : { uri: 'https://via.placeholder.com/150' }
                }
                style={ListingDetailScreenStyles.image}
                resizeMode="contain"
            />
            <Text style={ListingDetailScreenStyles.vehicleName}>{item.name}</Text>
            <Text style={ListingDetailScreenStyles.kmLimit}>
                Locations: {Array.isArray(item.location) ? item.location.join(', ') : 'N/A'}
            </Text>
            <Text style={ListingDetailScreenStyles.kmLimit}>
                Quantities: {Array.isArray(item.quantity) ? item.quantity.join(', ') : 'N/A'}
            </Text>
            <TouchableOpacity style={ListingDetailScreenStyles.rentButton}>
                <Text style={ListingDetailScreenStyles.rentButtonText}>Rent Now</Text>
            </TouchableOpacity>
        </View>
    );

    if (loading) {
        return (
            <View style={ListingDetailScreenStyles.loadingContainer}>
                <ActivityIndicator size="large" color="#E53935" />
                <Text style={ListingDetailScreenStyles.loadingText}>Loading vehicles...</Text>
            </View>
        );
    }

    return (
        <View style={ListingDetailScreenStyles.container}>
            {/* Vehicle List */}
            <FlatList
                data={vehicles}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={ListingDetailScreenStyles.listContent}
            />
        </View>
    );
}

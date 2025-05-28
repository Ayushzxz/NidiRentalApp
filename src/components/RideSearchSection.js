import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

export default function RideSearchSection({ vehicles = [], setFilteredVehicles }) {
    const navigation = useNavigation(); // Initialize navigation
    const [pickupDate, setPickupDate] = useState(null);
    const [dropoffDate, setDropoffDate] = useState(null);
    const [isDatePickerVisible, setDatePickerVisible] = useState(false);
    const [activePicker, setActivePicker] = useState(null);

    const [location, setLocation] = useState(null);
    const [locationOpen, setLocationOpen] = useState(false);
    const [locationOptions, setLocationOptions] = useState([]);

    const [category, setCategory] = useState(null);
    const [categoryOpen, setCategoryOpen] = useState(false);
    const [categoryOptions, setCategoryOptions] = useState([]);

    useEffect(() => {
        if (Array.isArray(vehicles) && vehicles.length > 0) {
            // Populate filter options based on vehicles
            const allLocations = vehicles.flatMap(vehicle => vehicle.location || []);
            const uniqueLocations = [...new Set(allLocations)];
            setLocationOptions(uniqueLocations.map(loc => ({ label: loc, value: loc })));

            const allCategories = vehicles.map(vehicle => vehicle.category);
            const uniqueCategories = [...new Set(allCategories)];
            setCategoryOptions(uniqueCategories.map(cat => ({ label: cat, value: cat })));
        } else {
            setLocationOptions([]);
            setCategoryOptions([]);
        }
    }, [vehicles]);

    const handleConfirmDate = (date) => {
        setDatePickerVisible(false);
        if (activePicker === 'pickup') {
            setPickupDate(date);
        } else {
            setDropoffDate(date);
        }
    };

    const applyFilters = () => {
        const filtered = vehicles.filter(vehicle => {
            const matchesLocation = location ? vehicle.location.includes(location) : true;
            const matchesCategory = category ? vehicle.category === category : true;
            return matchesLocation && matchesCategory;
        });

        // Navigate to ListingDetailScreen with filtered vehicles
        navigation.navigate('ListingDetailScreen', { filteredVehicles: filtered });
    };

    return (
        <View style={styles.container}>
            {/* Date & Time Pickers */}
            <Text style={styles.filterLabel}>Pickup Date & Time</Text>
            <TouchableOpacity
                style={styles.datetimeButton}
                onPress={() => {
                    setActivePicker('pickup');
                    setDatePickerVisible(true);
                }}
            >
                <Text style={styles.datetimeText}>
                    {pickupDate ? pickupDate.toLocaleString() : 'Select Pickup Date & Time'}
                </Text>
            </TouchableOpacity>

            <Text style={styles.filterLabel}>Dropoff Date & Time</Text>
            <TouchableOpacity
                style={styles.datetimeButton}
                onPress={() => {
                    setActivePicker('dropoff');
                    setDatePickerVisible(true);
                }}
            >
                <Text style={styles.datetimeText}>
                    {dropoffDate ? dropoffDate.toLocaleString() : 'Select Dropoff Date & Time'}
                </Text>
            </TouchableOpacity>

            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="datetime"
                onConfirm={handleConfirmDate}
                onCancel={() => setDatePickerVisible(false)}
            />

            {/* Location Filter */}
            <Text style={styles.filterLabel}>Location</Text>
            <DropDownPicker
                open={locationOpen}
                value={location}
                items={locationOptions}
                setOpen={setLocationOpen}
                setValue={setLocation}
                setItems={setLocationOptions}
                placeholder="Select a location"
                style={styles.dropdown}
                dropDownContainerStyle={styles.dropdownContainer}
                zIndex={3000}
                zIndexInverse={1000}
            />

            {/* Category Filter */}
            <Text style={styles.filterLabel}>Category</Text>
            <DropDownPicker
                open={categoryOpen}
                value={category}
                items={categoryOptions}
                setOpen={setCategoryOpen}
                setValue={setCategory}
                setItems={setCategoryOptions}
                placeholder="Select a category"
                style={styles.dropdown}
                dropDownContainerStyle={styles.dropdownContainer}
                zIndex={2000}
                zIndexInverse={2000}
            />

            {/* Confirm Filter Button */}
            <TouchableOpacity
                style={styles.confirmButton}
                onPress={applyFilters}
            >
                <Text style={styles.confirmButtonText}>Confirm</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff',
        flex: 1,
    },
    filterLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    datetimeButton: {
        padding: 12,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        marginBottom: 16,
    },
    datetimeText: {
        fontSize: 14,
        color: '#333',
    },
    dropdown: {
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        marginBottom: 16,
        borderColor: '#ccc',
    },
    dropdownContainer: {
        borderColor: '#ccc',
    },
    confirmButton: {
        backgroundColor: '#007BFF',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    confirmButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

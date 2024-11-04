import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function MapScreen() {
    const [location, setLocation] = useState<Region | undefined>(undefined);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [healthCenters, setHealthCenters] = useState([
        {
            id: 1,
            name: "Prinzly Dental Clinic",
            latitude: -6.2,
            longitude: 106.816,
            rating: 4.7,
            address: "1st Floor, 1 Atiku Abubakar Ave",
            distance: "4.7 km",
            time: "50 min",
            type: "Dentist",
            image: 'https://example.com/clinic-image.jpg', 
        },
    ]);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
            });
        })();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <View className="flex-row items-center mt-4 bg-gray-100 rounded-full px-4 py-2 mx-4">
                <TextInput
                    placeholder="location and the nearest primary health care"
                    className="flex-1 text-gray-500"
                />
                <TouchableOpacity>
                    <Ionicons name="options-outline" size={20} color="blue" />
                </TouchableOpacity>
            </View>

            <MapView
                style={{ flex: 1 }}
                region={location}
                showsUserLocation={true}
                showsMyLocationButton={true}
            >
                {healthCenters.map((center) => (
                    <Marker
                        key={center.id}
                        coordinate={{ latitude: center.latitude, longitude: center.longitude }}
                        title={center.name}
                        description={`${center.rating} ★`}
                    >
                        <View style={{ alignItems: 'center' }}>
                            <Image
                                source={{ uri: center.image }}
                                style={{ width: 40, height: 40, borderRadius: 20 }}
                            />
                            <Text style={{ color: 'orange', fontWeight: 'bold' }}>{center.rating} ★</Text>
                        </View>
                    </Marker>
                ))}
            </MapView>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ position: 'absolute', bottom: 20, paddingHorizontal: 16 }}>
                {healthCenters.map((center) => (
                    <View key={center.id} className="w-48 bg-white rounded-lg shadow-sm mr-4 p-2">
                        <Image
                            source={{ uri: center.image }}
                            className="h-24 w-full rounded-lg"
                            resizeMode="cover"
                        />
                        <Text className="font-bold text-sm mt-2">{center.name}</Text>
                        <Text className="text-gray-500 text-xs">{center.address}</Text>
                        <View className="flex-row items-center justify-between mt-2">
                            <View className="flex-row items-center">
                                <Ionicons name="location" size={12} color="blue" />
                                <Text className="text-xs ml-1 text-gray-600">{center.distance}/{center.time}</Text>
                            </View>
                            <Text className="text-xs bg-blue-100 text-blue-500 px-1 rounded">{center.type}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}
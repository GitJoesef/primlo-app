
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import AppointmentCard from '../common/appointment-card';
import ClinicCard from '../common/clinic-card';
import ServiceIcon from '../common/service-icon';

function HomePage() {
    return (
        <ScrollView className="bg-white px-4 py-2">
            <View className="flex-row items-center justify-between">
                <Text className="text-gray-500">Location</Text>
                <View className="flex-row items-center space-x-2">
                    <Ionicons name="location-sharp" size={18} color="blue" />
                    <Text className="font-bold text-black">Uyo, Aks Nigeria</Text>
                </View>
                <TouchableOpacity>
                    <Ionicons name="notifications-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View className="flex-row items-center mt-4 bg-gray-100 rounded-full px-4 py-2">
                <TextInput
                    placeholder="location and the nearest primary health care"
                    className="flex-1 text-gray-500"
                />
                <TouchableOpacity>
                    <Ionicons name="options-outline" size={20} color="blue" />
                </TouchableOpacity>
            </View>

            <View className="mt-6">
                <View className="flex-row items-center justify-between">
                    <Text className="font-bold text-lg">Nearby Health Care Centers</Text>
                    <TouchableOpacity>
                        <Text className="text-blue-500">see all</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-4">
                    <ClinicCard />
                    <ClinicCard />
                </ScrollView>
            </View>

            <View className="mt-6">
                <View className="flex-row items-center justify-between">
                    <Text className="font-bold text-lg">Services available</Text>
                    <TouchableOpacity>
                        <Text className="text-blue-500">see all</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-4">
                    <ServiceIcon name="heart" label="Cardiology" />
                    <ServiceIcon name="tooth" label="Dentist" />
                    <ServiceIcon name="stethoscope" label="Consult" />
                </ScrollView>
            </View>

            <View className="mt-6">
                <View className="flex-row items-center justify-between">
                    <Text className="font-bold text-lg">Upcoming Appointment</Text>
                    <TouchableOpacity>
                        <Text className="text-blue-500">see all</Text>
                    </TouchableOpacity>
                </View>
                <View className="mt-4">
                    <AppointmentCard />
                          </View>
            </View>
        </ScrollView>
    );
}

export default HomePage;
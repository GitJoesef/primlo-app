import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

const AppointmentCard = () => (
    <View className="bg-blue-500 rounded-lg p-4 mt-2 flex-row items-center space-x-4">
      <Image
        source={{ uri: 'https://example.com/doctor-image.jpg' }}
        className="h-12 w-12 rounded-full"
        resizeMode="cover"
      />
      <View className="flex-1">
        <Text className="text-white font-bold">Dr. Nsikak Thompson</Text>
        <Text className="text-blue-200">Cardiologist Appointment</Text>
        <View className="flex-row items-center mt-1">
          <MaterialIcons name="calendar-today" size={16} color="white" />
          <Text className="text-white ml-2">Monday, 26 Nov.</Text>
          <Text className="text-white ml-2">09am - 12pm</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Ionicons name="call" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );

export default AppointmentCard;
import { Ionicons } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";

const ClinicCard = () => (
    <View className="w-48 bg-white rounded-lg shadow-sm mr-4 p-2">
      <Image
        source={{ uri: 'https://example.com/healthcare-image.jpg' }}
        className="h-24 w-full rounded-lg"
        resizeMode="cover"
      />
      <Text className="font-bold text-sm mt-2">Prinzly Dental Clinic</Text>
      <Text className="text-gray-500 text-xs">1st Floor, 1 Atiku Abubakar Ave</Text>
      <View className="flex-row items-center justify-between mt-2">
        <View className="flex-row items-center">
          <Ionicons name="location" size={12} color="blue" />
          <Text className="text-xs ml-1 text-gray-600">4.7 km/50 min</Text>
        </View>
        <Text className="text-xs bg-blue-100 text-blue-500 px-1 rounded">Dentist</Text>
      </View>
    </View>
  );
export default ClinicCard;
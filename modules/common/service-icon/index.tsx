import { FontAwesome } from "@expo/vector-icons";
import { Text, View } from "react-native";

const ServiceIcon = ({ name, label }: { name: string, label: string }) => (
    <View className="items-center mr-4">
        <View className="w-12 h-12 bg-blue-100 rounded-full items-center justify-center">
            <FontAwesome name={"at"} size={24} color="blue" />
        </View>
        <Text className="text-xs mt-1 text-gray-600">{label}</Text>
    </View>
);

export default ServiceIcon;
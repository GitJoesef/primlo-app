import { PrimaryText } from "@/modules/common/primary-text"
import { StyleSheet, View } from "react-native"

const AppointmentPage = () => {
    return (
        <View className="flex h-full p-4 ">
            <View className="flex-row">
                <View className="flex-1 items-center bg-[#0065FF] rounded-[7px] py-1">
                    <PrimaryText title="Upcoming" altClassName="text-white" />
                </View>
                <View className="flex-1 items-center">
                    <PrimaryText title="Past" altClassName="" />
                </View>
            </View>
        </View>
    )
}

export default AppointmentPage;

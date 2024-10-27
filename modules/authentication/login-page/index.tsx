import Button from "@/modules/common/button";
import EditText from "@/modules/common/edit-text";
import { PrimaryText } from "@/modules/common/primary-text";
import { router } from "expo-router";
import { View } from "react-native"

const LoginPage = () => {
    return (
        <View className="flex h-full px-4">
            <PrimaryText fontWeight={700} title="Login to your Account" altClassName="" />
            <View className="mt-4">
                <EditText
                    placeHolder="email"
                    fontWeight={400}
                    placeholderColor="#0A0D29"
                    textClassName="text-sm"
                    editBackgroundClassName="border border-[#B6B6B632] py-1"
                />
            </View>
            <View className="mt-4">
                <EditText
                    placeHolder="Password"
                    fontWeight={400}
                    placeholderColor="#0A0D29"
                    textClassName="text-sm"
                    editBackgroundClassName="border border-[#B6B6B632] py-1"
                />
            </View>

            <View className="mt-4">
                <Button title="Login" type="primary" onClick={()=> router.navigate("/request-location")} />
            </View>
        </View>
    )
}

export default LoginPage;
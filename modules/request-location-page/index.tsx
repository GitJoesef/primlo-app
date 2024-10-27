import { Pressable, View } from "react-native"
import { PrimaryText } from "../common/primary-text";
import Button from "../common/button";
import { router } from "expo-router";

const RequestLocationPage = () => {
    return (
        <View>
            <PrimaryText title="" altClassName="" />
            <PrimaryText title="" altClassName="" />
            <Button title="Allow location access" type="primary" onClick={()=> router.navigate("/(tabs)/home")}/>

            <Pressable>
            <PrimaryText title="Enter location manually" altClassName="" />
            </Pressable>
        </View>
    )
}

export default RequestLocationPage;
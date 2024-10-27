import { Redirect } from "expo-router";
import { View } from "react-native"

const StartPage = () => {
    return (
        <Redirect
            href="/auth/login"
        />
    );
}

export default StartPage;
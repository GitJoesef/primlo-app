import AppLayout from "@/modules/common/app-layout";
import RequestLocationPage from "@/modules/request-location-page";
import { View } from "react-native";

const RequestLocation = () => {
    return (
        <AppLayout>
            <>
                <RequestLocationPage />
            </>
        </AppLayout>
    )

}

export default RequestLocation;
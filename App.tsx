import { Loading } from "@/components/loading";
import { store } from "@/redux/store";
import Routes from "@/routes";
import {
	Poppins_400Regular,
	Poppins_500Medium,
	Poppins_600SemiBold,
	Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./src/redux/store";

export default function Layout() {
	const queryClient = new QueryClient();
	const [fontsLoaded] = useFonts({
		Poppins_400Regular,
		Poppins_500Medium,
		Poppins_600SemiBold,
		Poppins_700Bold,
	});

	if (!fontsLoaded) {
		return <Loading />;
	}

	return (
		<Provider store={store}>
			<PersistGate loading={<Loading />} persistor={persistor}>
				<QueryClientProvider client={queryClient}>
					<SafeAreaView style={{ flex: 1 }}>
						<Routes />
						<StatusBar backgroundColor="#202020" style="light" translucent />
					</SafeAreaView>
				</QueryClientProvider>
			</PersistGate>
		</Provider>
	);
}

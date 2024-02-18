import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";
import { Loading } from "@/components/loading";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Routes from "@/routes";

export default function Layout() {
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
      <SafeAreaView style={{ flex: 1 }}>
        <Routes />
        <StatusBar backgroundColor="#202020" style="light" translucent />
      </SafeAreaView>
    </Provider>
  );
}

import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import * as S from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "@/routes/tab-routes";

export default function Home() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  function handleNavigate() {
    navigation.navigate("login");
  }

  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text>Home</Text>
      <S.Button onPress={handleNavigate}>
        <S.ButtonText>Login</S.ButtonText>
      </S.Button>
    </View>
  );
}

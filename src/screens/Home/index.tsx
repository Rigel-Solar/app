import { RootStackParams } from "@/routes/tab-routes";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text } from "react-native";
import * as C from "./styles";

export default function Home() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <C.Container>
      <C.Header>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </C.Header>
      <C.Main>
        <C.TitleArea>
          <C.Title>Pedidos</C.Title>
          <Text>Total 7 Pedidos</Text>
        </C.TitleArea>
      </C.Main>
    </C.Container>
  );
}

import { Order } from "@/components/order/order";
import { RootStackParams } from "@/routes/tab-routes";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as C from "./styles";

export default function Home() {
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParams>>();

	return (
		<C.Container>
			<C.Header>
				<C.TitleArea>
					<C.Title>Pedidos</C.Title>
					<C.Description>Total 7 Pedidos</C.Description>
				</C.TitleArea>
			</C.Header>
			<C.Main
				contentContainerStyle={{
					rowGap: 16,
				}}
			>
				<Order />
				<Order />
				<Order />
				<Order />
				<Order />
				<Order />
			</C.Main>
		</C.Container>
	);
}

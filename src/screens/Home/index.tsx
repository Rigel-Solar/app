import { Order } from "@/components/order/order";
import { PedidoTS } from "@/models/pedido";
import { RootStackParams } from "@/routes/tab-routes";
import { useFetch } from "@/utils/services/hooks/getQuery";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FlatList } from "react-native";
import * as C from "./styles";

export default function Home() {
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParams>>();

	const { data: pedidos = [] } = useFetch<PedidoTS[]>(
		"/Vistoria/getByTecnicoId",
		["pedidos"],
		{
			onSuccess: (data) => {
				console.log(data);
			},
			onError: (error) => {
				console.log("Error:", error);
			},
		}
	);

	return (
		<C.Container>
			<C.Header>
				<C.TitleArea>
					<C.Title>Pedidos</C.Title>
					<C.Description>Total {pedidos.length} Pedidos</C.Description>
				</C.TitleArea>
			</C.Header>
				<FlatList
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{ gap: 12 }}
					keyExtractor={(pedido) => pedido.id.toString()}
					data={pedidos}
					renderItem={({ item }) => (
						<Order
							onPress={() =>
								navigation.navigate("vistoria", { orderData: item })
							}
							data={item}
						/>
					)}
				/>
		</C.Container>
	);
}

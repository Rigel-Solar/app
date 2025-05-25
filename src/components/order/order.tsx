import { PedidoTS } from "@/models/pedido";
import { useAppSelector } from "@/redux/hooks/useApp";
import Entypo from "@expo/vector-icons/Entypo";
import { useEffect, useState } from "react";
import { TouchableOpacityProps } from "react-native";
import * as C from "./styles";

interface OrderTS extends TouchableOpacityProps {
	data: PedidoTS;
}

export function Order({ data, ...props }: OrderTS) {
	const [enderecoArray, setEnderecoArray] = useState<string[]>([
		"",
		"",
		"",
		"",
		"",
	]);
	const theme = useAppSelector((state) => state.theme);

	console.log(data);

	useEffect(() => {
		if (data?.idClienteNavigation.endereco) {
			const parts = data.idClienteNavigation.endereco
				.split(", ")
				.map((part) => part.trim());
			setEnderecoArray(parts);
		}
	}, [data]);

	return (
		<C.Container {...props}>
			<C.Header>
				<C.Title>{data.solucoes}</C.Title>
			</C.Header>
			<C.Description>
				<C.Text>
					{enderecoArray[2]} Nº {enderecoArray[3]}
				</C.Text>
				<C.Text>{enderecoArray[0]} - SP</C.Text>
			</C.Description>
			<C.Footer>
				<C.Text>{data.idClienteNavigation.nome ? data.idClienteNavigation.nome : "Sem nome"}</C.Text>
				<Entypo
					name="chevron-thin-right"
					size={16}
					color={theme.status == "dark" ? "white" : "black"}
				/>
			</C.Footer>
		</C.Container>
	);
}

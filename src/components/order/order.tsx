import { PedidoTS } from "@/models/pedido";
import { useAppSelector } from "@/redux/hooks/useApp";
import Entypo from "@expo/vector-icons/Entypo";
import { useEffect, useState } from "react";
import { TouchableOpacityProps } from "react-native";
import { Badge } from "../badge/badge";
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

	useEffect(() => {
		if (data?.clienteDTO.endereco) {
			const parts = data.clienteDTO.endereco
				.split(", ")
				.map((part) => part.trim());
			setEnderecoArray(parts);
		}
	}, [data]);

	return (
		<C.Container {...props}>
			<C.Header>
				<C.Title>Fotovoltáico</C.Title>
				<Badge $status="Em andamento" />
			</C.Header>
			<C.Description>
				<C.Text>
					{enderecoArray[2]} Nº {enderecoArray[3]}
				</C.Text>
				<C.Text>{enderecoArray[0]} - SP</C.Text>
			</C.Description>
			<C.Footer>
				<C.Text>{data.clienteDTO.nome}</C.Text>
				<Entypo
					name="chevron-thin-right"
					size={16}
					color={theme.status == "dark" ? "white" : "black"}
				/>
			</C.Footer>
		</C.Container>
	);
}

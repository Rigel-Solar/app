import { BackButton } from "@/components/back-button";
import { Button } from "@/components/form/button";
import { RootStackParams } from "@/routes/tab-routes";
import { orders } from "@/utils/constants/orders";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import * as C from "./styles";

export default function Vistoria() {
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParams>>();

	const [enderecoArray, setEnderecoArray] = useState<string[]>([
		"",
		"",
		"",
		"",
		"",
	]);

	useEffect(() => {
		if (orders?.clienteDTO.endereco) {
			const parts = orders.clienteDTO.endereco
				.split(", ")
				.map((part) => part.trim());
			setEnderecoArray(parts);
		}
	}, [orders]);

	return (
		<C.Container
			contentContainerStyle={{
				rowGap: 16,
			}}
		>
			<BackButton />
			<C.Main>
				<C.FakeInput>
					<C.Label>E-mail</C.Label>
					<C.Value>{orders.clienteDTO.email}</C.Value>
				</C.FakeInput>
				<C.Row>
					<C.FakeInput>
						<C.Label>Cidade</C.Label>
						<C.Value>{enderecoArray[0]}</C.Value>
					</C.FakeInput>
					<C.FakeInput>
						<C.Label>Bairro</C.Label>
						<C.Value>{enderecoArray[1]}</C.Value>
					</C.FakeInput>
				</C.Row>
				<C.FakeInput>
					<C.Label>Rua</C.Label>
					<C.Value>{enderecoArray[2]}</C.Value>
				</C.FakeInput>
				<C.Row>
					<C.FakeInput>
						<C.Label>CEP</C.Label>
						<C.Value>{enderecoArray[4]}</C.Value>
					</C.FakeInput>
					<C.FakeInput>
						<C.Label>Nº</C.Label>
						<C.Value>{enderecoArray[3]}</C.Value>
					</C.FakeInput>
				</C.Row>
				<C.FakeInput>
					<C.Label>Tipo de Instalação</C.Label>
					<C.Value>{orders.tipoInstalacao}</C.Value>
				</C.FakeInput>
				<C.FakeInput>
					<C.Label>Soluções</C.Label>
					<C.Value>{orders.solucoes}</C.Value>
				</C.FakeInput>
				<C.FakeInput>
					<C.Label>Pretende instalar em</C.Label>
					<C.Value>{orders.pretendeInstalarEm}</C.Value>
				</C.FakeInput>
				<C.FakeInput>
					<C.Label>Concessionárias</C.Label>
					<C.Value>CPFL</C.Value>
				</C.FakeInput>
				<C.FakeInput>
					<C.Label>Custo da conta de luz</C.Label>
					<C.Value>{orders.valorContaLuz}</C.Value>
				</C.FakeInput>
				<C.FakeInput>
					<C.Label>Comentários</C.Label>
					<C.Value>{orders.comentarios}</C.Value>
				</C.FakeInput>
			</C.Main>
			<C.ButtonArea>
				<Button onPress={() => navigation.navigate("padraoEntradaForm")}>
					Criar Relatório
				</Button>
			</C.ButtonArea>
		</C.Container>
	);
}

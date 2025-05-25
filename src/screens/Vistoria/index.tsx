import { BackButton } from "@/components/back-button";
import { Button } from "@/components/form/button";
import { RootStackParams } from "@/routes/tab-routes";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import * as C from "./styles";

export type VistoriaRouteProp = RouteProp<RootStackParams, "vistoria">;

export default function Vistoria() {
	const route = useRoute<VistoriaRouteProp>();
	const { orderData } = route.params;
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
		if (orderData?.idClienteNavigation.endereco) {
			const parts = orderData.idClienteNavigation.endereco
				.split(", ")
				.map((part) => part.trim());
			setEnderecoArray(parts);
		}
	}, [orderData]);

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
					<C.Value>{orderData.idClienteNavigation.email}</C.Value>
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
					<C.Value>{orderData.tipoInstalacao}</C.Value>
				</C.FakeInput>
				<C.FakeInput>
					<C.Label>Soluções</C.Label>
					<C.Value>{orderData.solucoes}</C.Value>
				</C.FakeInput>
				<C.FakeInput>
					<C.Label>Pretende instalar em</C.Label>
					<C.Value>{orderData.pretendeInstalarEm}</C.Value>
				</C.FakeInput>
				<C.FakeInput>
					<C.Label>Concessionárias</C.Label>
					<C.Value>CPFL</C.Value>
				</C.FakeInput>
				<C.FakeInput>
					<C.Label>Custo da conta de luz</C.Label>
					<C.Value>{orderData.valorContaLuz}</C.Value>
				</C.FakeInput>
				<C.FakeInput>
					<C.Label>Comentários</C.Label>
					<C.Value>{orderData.comentarios}</C.Value>
				</C.FakeInput>
			</C.Main>
			<C.ButtonArea>
				{orderData.solucoes === "Aquecedor Banho" && (
					<Button
						onPress={() =>
							navigation.navigate("banho", { orderData: orderData })
						}
					>
						Criar Relatório
					</Button>
				)}
				{orderData.solucoes === "Aquecedor Piscina" && (
					<Button
						onPress={() =>
							navigation.navigate("piscina", { orderData: orderData })
						}
					>
						Criar Relatório
					</Button>
				)}
				{orderData.solucoes === "Fotovoltaico Comercial" && (
					<Button
						onPress={() =>
							navigation.navigate("padraoEntradaForm", { orderData: orderData })
						}
					>
						Criar Relatório
					</Button>
				)}
				{orderData.solucoes === "Fotovoltaico Residencial" && (
					<Button
						onPress={() =>
							navigation.navigate("padraoEntradaForm", { orderData: orderData })
						}
					>
						Criar Relatório
					</Button>
				)}
			</C.ButtonArea>
		</C.Container>
	);
}

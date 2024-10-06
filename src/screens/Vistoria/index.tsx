import { Button } from "@/components/button";
import { RootStackParams } from "@/routes/tab-routes";
import { orders } from "@/utils/constants/orders";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as C from "./styles";

export default function Vistoria() {
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParams>>();

	return (
		<C.Container>
			<C.Main>
				<C.FakeInput>
					<C.Label>E-mail</C.Label>
					<C.Value>{orders.client.email}</C.Value>
				</C.FakeInput>
				<C.Row>
					<C.FakeInput>
						<C.Label>Cidade</C.Label>
						<C.Value>{orders.client.address.city}</C.Value>
					</C.FakeInput>
					<C.FakeInput>
						<C.Label>Bairro</C.Label>
						<C.Value>{orders.client.address.neighbourhood}</C.Value>
					</C.FakeInput>
				</C.Row>
				<C.FakeInput>
					<C.Label>Rua</C.Label>
					<C.Value>{orders.client.address.street}</C.Value>
				</C.FakeInput>
				<C.Row>
					<C.FakeInput>
						<C.Label>CEP</C.Label>
						<C.Value>{orders.client.address.zipCode}</C.Value>
					</C.FakeInput>
					<C.FakeInput>
						<C.Label>Nº</C.Label>
						<C.Value>{orders.client.address.number}</C.Value>
					</C.FakeInput>
				</C.Row>
				<C.FakeInput>
					<C.Label>Tipo de Instalação</C.Label>
					<C.Value>{orders.type_person}</C.Value>
				</C.FakeInput>
				<C.FakeInput>
					<C.Label>Soluções</C.Label>
					<C.Value>{orders.type_order}</C.Value>
				</C.FakeInput>
				<C.FakeInput>
					<C.Label>Pretende instalar em</C.Label>
					<C.Value>{orders.time}</C.Value>
				</C.FakeInput>
				<C.FakeInput>
					<C.Label>Concessionárias</C.Label>
					<C.Value>{orders.concessionaires}</C.Value>
				</C.FakeInput>
				<C.FakeInput>
					<C.Label>Custo da conta de luz</C.Label>
					<C.Value>{orders.light_cost}</C.Value>
				</C.FakeInput>
				<C.FakeInput>
					<C.Label>Comentários</C.Label>
					<C.Value>{orders.comments}</C.Value>
				</C.FakeInput>
			</C.Main>
			<Button>Criar Relatório</Button>
		</C.Container>
	);
}

import Entypo from "@expo/vector-icons/Entypo";
import { Badge } from "../badge/badge";
import * as C from "./styles";
import { useAppSelector } from "@/redux/hooks/useApp";

export function Order() {
	const theme = useAppSelector((state) => state.theme)
	return (
		<C.Container>
			<C.Header>
				<C.Title>Fotovoltáico</C.Title>
				<Badge $status="Em andamento" />
			</C.Header>
			<C.Description>
				<C.Text>Rod. Pref. Luiz de Souza Nº 301</C.Text>
				<C.Text>São Caetano do Sul - SP</C.Text>
			</C.Description>
			<C.Footer>
				<C.Text>Senai</C.Text>
				<Entypo name="chevron-thin-right" size={16} color={theme.status == "dark" ? "white" : "black"} />
			</C.Footer>
		</C.Container>
	);
}

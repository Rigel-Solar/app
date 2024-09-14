import Entypo from '@expo/vector-icons/Entypo';
import { Text } from "react-native";
import { Badge } from "../badge/badge";
import * as C from "./styles";

export function Order() {
  return (
    <C.Container>
      <C.Header>
        <Text>Fotovoltáico</Text>
        <Badge $status="Em andamento"/>
      </C.Header>
      <C.Description>
        <Text>
          Rod. Pref. Luiz de Souza Nº 301
        </Text>
        <Text>
          São Caetano do Sul - SP
        </Text>
      </C.Description>
      <C.Footer>
        <Text>Senai</Text>
        <Entypo name="chevron-thin-right" size={24} color="black" />
      </C.Footer>
    </C.Container>
  )
}
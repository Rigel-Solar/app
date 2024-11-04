import React from "react";
import { ScrollView, View } from "react-native";
import PadraoEntradaFormScreen from "./PadraoEntradaForm";

const Fotovoltaico = () => {
	return (
		<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
			<View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 30 }}>
				<PadraoEntradaFormScreen />
			</View>
		</ScrollView>
	);
};

export default Fotovoltaico;

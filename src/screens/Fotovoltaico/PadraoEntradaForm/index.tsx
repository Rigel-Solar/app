import { Button } from "@/components/form/button";
import { FormFieldsContainer } from "@/components/form/form";
import { Input } from "@/components/form/input";
import { RootStackParams } from "@/routes/tab-routes";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Controller } from "react-hook-form";
import { View } from "react-native";
import { ButtonArea, Label } from "../styles";

interface PadraoEntradaFormProps {
	control: any;
	errors: any;
}

import { useAppDispatch } from "@/redux/hooks/useApp";
import { updatePadraoEntrada } from "@/redux/reducers/fotovoltaico-reducer";
import { VistoriaRouteProp } from "@/screens/Vistoria";
import {
	fotovoltaicoSchema,
	FotovoltaicoTS,
} from "@/utils/schemas/schema-fotovoltaico";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ScrollView } from "react-native";

const PadraoEntradaFormScreen = () => {
	const route = useRoute<VistoriaRouteProp>();
	const { orderData } = route.params;
	const dispatch = useAppDispatch();
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParams>>();
	const {
		control,
		handleSubmit,
		formState: errors,
	} = useForm<FotovoltaicoTS>({
		resolver: yupResolver(fotovoltaicoSchema),
	});

	const onSubmit = (formData: FotovoltaicoTS) => {
		dispatch(updatePadraoEntrada(formData));
		navigation.navigate("quadroPrincipalForm", { orderData: orderData });
	};

	return (
		<ScrollView
			contentContainerStyle={{
				flexGrow: 1,
			}}
		>
			<View
				style={{
					flex: 1,
					paddingHorizontal: 20,
					paddingVertical: 30,
					justifyContent: "space-between",
				}}
			>
				<PadraoEntradaForm control={control} errors={errors} />
				<ButtonArea>
					<Button
						onPress={() => navigation.goBack()}
						icon={<Ionicons name="chevron-back" size={16} color="white" />}
					>
						Voltar
					</Button>
					<Button
						onPress={handleSubmit(onSubmit)}
						iconRight
						icon={<Ionicons name="chevron-forward" size={16} color="white" />}
					>
						Avançar
					</Button>
				</ButtonArea>
			</View>
		</ScrollView>
	);
};

const PadraoEntradaForm = ({ control, errors }: PadraoEntradaFormProps) => {
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParams>>();
	return (
		<View>
			<FormFieldsContainer>
				<Label>Concessionária de Energia</Label>
				<Controller
					control={control}
					name="concessionariaEnergia"
					render={({ field: { onChange, value } }) => (
						<Input.Root>
							<Input.Input
								value={value || ""}
								placeholderText="ex.: ABC Electric"
								onChange={onChange}
							/>
							<Input.ErrorText
								ErrorText={errors.concessionariaEnergia?.message}
							/>
						</Input.Root>
					)}
				/>
			</FormFieldsContainer>

			<FormFieldsContainer>
				<Label>Tipo de Cliente</Label>
				<Controller
					control={control}
					name="tipoClienteDTO"
					render={({ field: { onChange, value } }) => (
						<Input.Root>
							<Input.Input
								value={value?.tipo || ""}
								placeholderText="ex.: Residencial, Comercial"
								onChange={(newValue) => onChange({ tipo: newValue })}
							/>
							<Input.ErrorText ErrorText={errors.tipoClienteDTO?.message} />
						</Input.Root>
					)}
				/>
			</FormFieldsContainer>

			<FormFieldsContainer>
				<Label>Demanda Contratada</Label>
				<Controller
					control={control}
					name="demandaContratada"
					render={({ field: { onChange, value } }) => (
						<Input.Root>
							<Input.Input
								value={value || ""}
								placeholderText="ex.: 100kW"
								onChange={onChange}
							/>
							<Input.ErrorText ErrorText={errors.demandaContratada?.message} />
						</Input.Root>
					)}
				/>
			</FormFieldsContainer>

			<FormFieldsContainer>
				<Label>Tipo de Ligação</Label>
				<Controller
					control={control}
					name="tipoLigacaoDTO"
					render={({ field: { onChange, value } }) => (
						<Input.Root>
							<Input.Input
								value={value?.tipo || ""}
								placeholderText="ex.: Monofásica, Bifásica, Trifásica"
								onChange={(newValue) => onChange({ tipo: newValue })}
							/>
							<Input.ErrorText ErrorText={errors.tipoLigacaoDTO?.message} />
						</Input.Root>
					)}
				/>
			</FormFieldsContainer>

			<FormFieldsContainer>
				<Label>Tensão Nominal</Label>
				<Controller
					control={control}
					name="tensaoNominalDTO"
					render={({ field: { onChange, value } }) => (
						<Input.Root>
							<Input.Input
								value={value?.tensao || ""}
								placeholderText="ex.: 220V, 380V"
								onChange={(newValue) => onChange({ tensao: newValue })}
							/>
							<Input.ErrorText ErrorText={errors.tensaoNominalDTO?.message} />
						</Input.Root>
					)}
				/>
			</FormFieldsContainer>

			<FormFieldsContainer>
				<Label>Condição Padrão de Entrada</Label>
				<Controller
					control={control}
					name="condicaoPadraoEntradaDTO"
					render={({ field: { onChange, value } }) => (
						<Input.Root>
							<Input.Input
								value={value?.condicao || ""}
								placeholderText="ex.: Bom, Regular, Ruim"
								onChange={(newValue) => onChange({ condicao: newValue })}
							/>
							<Input.ErrorText
								ErrorText={errors.condicaoPadraoEntradaDTO?.message}
							/>
						</Input.Root>
					)}
				/>
			</FormFieldsContainer>

			<FormFieldsContainer>
				<Label>Dimensão da Caixa Padrão</Label>
				<Controller
					control={control}
					name="dimensaoCaixaPadrao"
					render={({ field: { onChange, value } }) => (
						<Input.Root>
							<Input.Input
								value={value || ""}
								placeholderText="ex.: 60x40x20cm"
								onChange={onChange}
							/>
							<Input.ErrorText
								ErrorText={errors.dimensaoCaixaPadrao?.message}
							/>
						</Input.Root>
					)}
				/>
			</FormFieldsContainer>

			<FormFieldsContainer>
				<Label>Modelo do Relógio</Label>
				<Controller
					control={control}
					name="modeloRelogioDTO"
					render={({ field: { onChange, value } }) => (
						<Input.Root>
							<Input.Input
								value={value?.modelo || ""}
								placeholderText="ex.: ABC123"
								onChange={(newValue) => onChange({ modelo: newValue })}
							/>
							<Input.ErrorText ErrorText={errors.modeloRelogioDTO?.message} />
						</Input.Root>
					)}
				/>
			</FormFieldsContainer>
		</View>
	);
};

export default PadraoEntradaFormScreen;

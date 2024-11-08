import { Button } from "@/components/form/button";
import { FormFieldsContainer } from "@/components/form/form";
import { Input } from "@/components/form/input";
import { useAppDispatch } from "@/redux/hooks/useApp";
import { updateTelhado } from "@/redux/reducers/fotovoltaico-reducer";
import { RootStackParams } from "@/routes/tab-routes";
import { VistoriaRouteProp } from "@/screens/Vistoria";
import {
	fotovoltaicoSchema,
	FotovoltaicoTS,
} from "@/utils/schemas/schema-fotovoltaico";
import { Ionicons } from "@expo/vector-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { ScrollView, View } from "react-native";
import { ButtonArea, Label, Form } from "../styles";

interface TelhadoFormProps {
	control: any;
	errors: any;
}

const TelhadoFormScreen = () => {
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
		dispatch(updateTelhado(formData));
	};

	return (
		<Form
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
				<TelhadoForm control={control} errors={errors} />
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
						Salvar
					</Button>
				</ButtonArea>
			</View>
		</Form>
	);
};

const TelhadoForm = ({ control, errors }: TelhadoFormProps) => {
	return (
		<View>
			<FormFieldsContainer>
				<Label>Acesso</Label>
				<Controller
					control={control}
					name="telhadoAcessoDTO.acesso"
					render={({ field: { onChange, value } }) => (
						<Input.Root>
							<Input.Input
								value={value || ""}
								placeholderText="ex.: Escada, Plataforma"
								onChange={onChange}
							/>
							<Input.ErrorText
								ErrorText={errors.telhadoAcessoDTO?.acesso?.message}
							/>
						</Input.Root>
					)}
				/>
			</FormFieldsContainer>

			<FormFieldsContainer>
				<Label>Tipo de Telha</Label>
				<Controller
					control={control}
					name="tipoTelha"
					render={({ field: { onChange, value } }) => (
						<Input.Root>
							<Input.Input
								value={value || ""}
								placeholderText="ex.: Cerâmica, Concreto"
								onChange={onChange}
							/>
							<Input.ErrorText ErrorText={errors.tipoTelha?.message} />
						</Input.Root>
					)}
				/>
			</FormFieldsContainer>

			<FormFieldsContainer>
				<Label>Distância entre Ripas</Label>
				<Controller
					control={control}
					name="distanciaRipasTelhado"
					render={({ field: { onChange, value } }) => (
						<Input.Root>
							<Input.Input
								value={value || ""}
								placeholderText="ex.: 30cm"
								onChange={onChange}
							/>
							<Input.ErrorText
								ErrorText={errors.distanciaRipasTelhado?.message}
							/>
						</Input.Root>
					)}
				/>
			</FormFieldsContainer>

			<FormFieldsContainer>
				<Label>Distância entre Caibros</Label>
				<Controller
					control={control}
					name="distanciaCaibrosTelhado"
					render={({ field: { onChange, value } }) => (
						<Input.Root>
							<Input.Input
								value={value || ""}
								placeholderText="ex.: 50cm"
								onChange={onChange}
							/>
							<Input.ErrorText
								ErrorText={errors.distanciaCaibrosTelhado?.message}
							/>
						</Input.Root>
					)}
				/>
			</FormFieldsContainer>

			<FormFieldsContainer>
				<Label>Distância entre Terças</Label>
				<Controller
					control={control}
					name="distanciaTercasTelhado"
					render={({ field: { onChange, value } }) => (
						<Input.Root>
							<Input.Input
								value={value || ""}
								placeholderText="ex.: 100cm"
								onChange={onChange}
							/>
							<Input.ErrorText
								ErrorText={errors.distanciaTercasTelhado?.message}
							/>
						</Input.Root>
					)}
				/>
			</FormFieldsContainer>

			<FormFieldsContainer>
				<Label>Distância Empena</Label>
				<Controller
					control={control}
					name="distanciaEmpenaTelhado"
					render={({ field: { onChange, value } }) => (
						<Input.Root>
							<Input.Input
								value={value || ""}
								placeholderText="ex.: 50cm"
								onChange={onChange}
							/>
							<Input.ErrorText
								ErrorText={errors.distanciaEmpenaTelhado?.message}
							/>
						</Input.Root>
					)}
				/>
			</FormFieldsContainer>

			<FormFieldsContainer>
				<Label>Condição do Telhado</Label>
				<Controller
					control={control}
					name="condicaoVigaDTO.condicao"
					render={({ field: { onChange, value } }) => (
						<Input.Root>
							<Input.Input
								value={value || ""}
								placeholderText="ex.: Bom, Regular, Ruim"
								onChange={onChange}
							/>
							<Input.ErrorText
								ErrorText={errors.condicaoVigaDTO?.condicao?.message}
							/>
						</Input.Root>
					)}
				/>
			</FormFieldsContainer>
		</View>
	);
};

export default TelhadoFormScreen;

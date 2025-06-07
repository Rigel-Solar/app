import { Button } from "@/components/form/button";
import { FormFieldsContainer } from "@/components/form/form";
import { Input } from "@/components/form/input";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/useApp";
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
import { Alert, ScrollView, View } from "react-native";
import { ButtonArea, Label, Form } from "../styles";
import { useMutationQuery } from "@/utils/services/hooks/useMutationQuery";

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
		formState: { errors },
	} = useForm<FotovoltaicoTS>({
		resolver: yupResolver(fotovoltaicoSchema),
	});

	const fotovoltaico = useAppSelector((state) => state.fotovoltaico);

	const {
		mutate: onCreate,
		isLoading,
		isError,
	} = useMutationQuery(`/FichaFotovoltaico`, "post");

	// Função para transformar e validar os dados antes do envio
	const transformFormData = (formData: FotovoltaicoTS): FotovoltaicoTS => {
		const transformed = { ...formData };
		
		transformed.idVistoria = orderData.id;

		// Converter strings numéricas para números
		if (transformed.distanciaRipasTelhado) {
			const num = parseFloat(transformed.distanciaRipasTelhado.toString());
			transformed.distanciaRipasTelhado = !isNaN(num) ? num : undefined;
		}
		
		if (transformed.distanciaCaibrosTelhado) {
			const num = parseFloat(transformed.distanciaCaibrosTelhado.toString());
			transformed.distanciaCaibrosTelhado = !isNaN(num) ? num : undefined;
		}
		
		if (transformed.distanciaTercasTelhado) {
			const num = parseFloat(transformed.distanciaTercasTelhado.toString());
			transformed.distanciaTercasTelhado = !isNaN(num) ? num : undefined;
		}
		
		if (transformed.distanciaEmpenaTelhado) {
			const num = parseFloat(transformed.distanciaEmpenaTelhado.toString());
			transformed.distanciaEmpenaTelhado = !isNaN(num) ? num : undefined;
		}

		// Garantir que DTOs tenham fichaFotovoltaico
		if (transformed.telhadoAcessoDTO && !transformed.telhadoAcessoDTO.fichaFotovoltaico) {
			transformed.telhadoAcessoDTO.fichaFotovoltaico = orderData.id?.toString();
		}
		
		if (transformed.condicaoVigaDTO && !transformed.condicaoVigaDTO.fichaFotovoltaico) {
			transformed.condicaoVigaDTO.fichaFotovoltaico = orderData.id?.toString();
		}

		// Remover campos undefined ou vazios
		Object.keys(transformed).forEach(key => {
			if (transformed[key as keyof FotovoltaicoTS] === undefined || 
				transformed[key as keyof FotovoltaicoTS] === '' ||
				transformed[key as keyof FotovoltaicoTS] === null) {
				delete transformed[key as keyof FotovoltaicoTS];
			}
		});

		return transformed;
	};

	const onSubmit = (formData: FotovoltaicoTS) => {
		console.log("Dados originais do formulário:", formData);
		
                try {
                        const transformedData = transformFormData(formData);
                        console.log("Dados transformados para envio:", transformedData);

                        onCreate(transformedData, {
				onSuccess: (response) => {
					console.log("Sucesso na criação:", response);
					Alert.alert("Relatório criado!");
					dispatch(updateTelhado(transformedData));
					navigation.goBack();
				},
				onError: (error) => {
					console.error("Erro detalhado:", error);
					
					Alert.alert(
						"Não foi possível enviar",
						"Sua requisição não foi enviada, mas salvamos seu relatório!"
					);
					dispatch(updateTelhado(transformedData));
					navigation.goBack();
				},
			});
		} catch (error) {
			console.error("Erro na transformação dos dados:", error);
			Alert.alert("Erro", "Erro ao processar os dados do formulário");
		}
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
						disabled={isLoading}
					>
						{isLoading ? "Salvando..." : "Salvar"}
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
				<Label>Distância entre Ripas (cm)</Label>
				<Controller
					control={control}
					name="distanciaRipasTelhado"
					render={({ field: { onChange, value } }) => (
						<Input.Root>
							<Input.Input
								value={value?.toString() || ""}
								placeholderText="ex.: 30"
								onChange={(text) => {
									const numValue = parseFloat(text);
									onChange(isNaN(numValue) ? text : numValue);
								}}
								keyboardType="numeric"
							/>
							<Input.ErrorText
								ErrorText={errors.distanciaRipasTelhado?.message}
							/>
						</Input.Root>
					)}
				/>
			</FormFieldsContainer>

			<FormFieldsContainer>
				<Label>Distância entre Caibros (cm)</Label>
				<Controller
					control={control}
					name="distanciaCaibrosTelhado"
					render={({ field: { onChange, value } }) => (
						<Input.Root>
							<Input.Input
								value={value?.toString() || ""}
								placeholderText="ex.: 50"
								onChange={(text) => {
									const numValue = parseFloat(text);
									onChange(isNaN(numValue) ? text : numValue);
								}}
								keyboardType="numeric"
							/>
							<Input.ErrorText
								ErrorText={errors.distanciaCaibrosTelhado?.message}
							/>
						</Input.Root>
					)}
				/>
			</FormFieldsContainer>

			<FormFieldsContainer>
				<Label>Distância entre Terças (cm)</Label>
				<Controller
					control={control}
					name="distanciaTercasTelhado"
					render={({ field: { onChange, value } }) => (
						<Input.Root>
							<Input.Input
								value={value?.toString() || ""}
								placeholderText="ex.: 100"
								onChange={(text) => {
									const numValue = parseFloat(text);
									onChange(isNaN(numValue) ? text : numValue);
								}}
								keyboardType="numeric"
							/>
							<Input.ErrorText
								ErrorText={errors.distanciaTercasTelhado?.message}
							/>
						</Input.Root>
					)}
				/>
			</FormFieldsContainer>

			<FormFieldsContainer>
				<Label>Distância Empena (cm)</Label>
				<Controller
					control={control}
					name="distanciaEmpenaTelhado"
					render={({ field: { onChange, value } }) => (
						<Input.Root>
							<Input.Input
								value={value?.toString() || ""}
								placeholderText="ex.: 50"
								onChange={(text) => {
									const numValue = parseFloat(text);
									onChange(isNaN(numValue) ? text : numValue);
								}}
								keyboardType="numeric"
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
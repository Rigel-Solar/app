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
import { ButtonArea, Form, Label } from "../styles";

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

const PadraoEntradaFormScreen = () => {
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

	const onSubmit = (formData: FotovoltaicoTS) => {
		console.log("Aqui 2: ", formData)
		dispatch(updatePadraoEntrada(formData));
		navigation.navigate("quadroPrincipalForm", { orderData: orderData });
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
		</Form>
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
                                        name="concessionariaEnergiaPe"
					render={({ field: { onChange, value } }) => (
						<Input.Root>
							<Input.Input
								value={value || ""}
								placeholderText="ex.: ABC Electric"
								onChange={onChange}
							/>
                                                        <Input.ErrorText
                                                                ErrorText={errors.concessionariaEnergiaPe?.message}
                                                        />
						</Input.Root>
					)}
				/>
			</FormFieldsContainer>

			<FormFieldsContainer>
                                <Label>Tipo de Cliente</Label>
                                <Controller
                                        control={control}
                                        name="tipoClienteDTO.tipo"
                                        render={({ field: { onChange, value } }) => (
                                                <Input.Root>
                                                        <Input.Input
                                                                value={value || ""}
                                                                placeholderText="ex.: Residencial, Comercial"
                                                                onChange={onChange}
                                                        />
                                                        <Input.ErrorText ErrorText={errors.tipoClienteDTO?.tipo?.message} />
                                                </Input.Root>
                                        )}
                                />
			</FormFieldsContainer>

			<FormFieldsContainer>
                                <Label>Demanda Contratada</Label>
                                <Controller
                                        control={control}
                                        name="demandaContratadaPe"
                                        render={({ field: { onChange, value } }) => (
                                                <Input.Root>
                                                        <Input.Input
                                                                value={value?.toString() || ""}
                                                                placeholderText="ex.: 100"
                                                                onChange={(text) => {
                                                                        const num = parseFloat(text);
                                                                        onChange(isNaN(num) ? text : num);
                                                                }}
                                                                keyboardType="numeric"
                                                        />
                                                        <Input.ErrorText ErrorText={errors.demandaContratadaPe?.message} />
                                                </Input.Root>
                                        )}
                                />
			</FormFieldsContainer>

			<FormFieldsContainer>
                                <Label>Tipo de Ligação</Label>
                                <Controller
                                        control={control}
                                        name="tipoLigacaoDTO.tipo"
                                        render={({ field: { onChange, value } }) => (
                                                <Input.Root>
                                                        <Input.Input
                                                                value={value || ""}
                                                                placeholderText="ex.: Monofásica, Bifásica, Trifásica"
                                                                onChange={onChange}
                                                        />
                                                        <Input.ErrorText ErrorText={errors.tipoLigacaoDTO?.tipo?.message} />
                                                </Input.Root>
                                        )}
                                />
			</FormFieldsContainer>

			<FormFieldsContainer>
                                <Label>Tensão Nominal</Label>
                                <Controller
                                        control={control}
                                        name="tensaoNominalDTO.tensao"
                                        render={({ field: { onChange, value } }) => (
                                                <Input.Root>
                                                        <Input.Input
                                                                value={value || ""}
                                                                placeholderText="ex.: 220V, 380V"
                                                                onChange={onChange}
                                                        />
                                                        <Input.ErrorText ErrorText={errors.tensaoNominalDTO?.tensao?.message} />
                                                </Input.Root>
                                        )}
                                />
			</FormFieldsContainer>

			<FormFieldsContainer>
                                <Label>Condição Padrão de Entrada</Label>
                                <Controller
                                        control={control}
                                        name="condicaoPadraoEntradaDTO.condicao"
                                        render={({ field: { onChange, value } }) => (
                                                <Input.Root>
                                                        <Input.Input
                                                                value={value || ""}
                                                                placeholderText="ex.: Bom, Regular, Ruim"
                                                                onChange={onChange}
                                                        />
                                                        <Input.ErrorText
                                                                ErrorText={errors.condicaoPadraoEntradaDTO?.condicao?.message}
                                                        />
                                                </Input.Root>
                                        )}
                                />
			</FormFieldsContainer>

			<FormFieldsContainer>
                                <Label>Dimensão da Caixa Padrão</Label>
                                <Controller
                                        control={control}
                                        name="dimensaoCaixaPadraoPe"
					render={({ field: { onChange, value } }) => (
						<Input.Root>
							<Input.Input
								value={value || ""}
								placeholderText="ex.: 60x40x20cm"
								onChange={onChange}
							/>
                                                        <Input.ErrorText
                                                                ErrorText={errors.dimensaoCaixaPadraoPe?.message}
                                                        />
						</Input.Root>
					)}
				/>
			</FormFieldsContainer>

			<FormFieldsContainer>
                                <Label>Modelo do Relógio</Label>
                                <Controller
                                        control={control}
                                        name="modeloRelogioDTO.modelo"
                                        render={({ field: { onChange, value } }) => (
                                                <Input.Root>
                                                        <Input.Input
                                                                value={value || ""}
                                                                placeholderText="ex.: ABC123"
                                                                onChange={onChange}
                                                        />
                                                        <Input.ErrorText ErrorText={errors.modeloRelogioDTO?.modelo?.message} />
                                                </Input.Root>
                                        )}
                                />
			</FormFieldsContainer>
		</View>
	);
};

export default PadraoEntradaFormScreen;

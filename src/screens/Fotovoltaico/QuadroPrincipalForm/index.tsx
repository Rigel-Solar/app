import { Button } from "@/components/form/button";
import { FormFieldsContainer } from "@/components/form/form";
import { Input } from "@/components/form/input";
import { useAppDispatch } from "@/redux/hooks/useApp";
import { updateQuadroPrincipal } from "@/redux/reducers/fotovoltaico-reducer";
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
import { View } from "react-native";
import { ButtonArea, Form, Label } from "../styles";

interface QuadroPrincipalFormProps {
	control: any;
	errors: any;
}

const QuadroPrincipalFormScreen = () => {
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
		console.log("Aqui 2: ", formData);
		dispatch(updateQuadroPrincipal(formData));
		navigation.navigate("soloForm", { orderData: orderData });
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
				<QuadroPrincipalForm control={control} errors={errors} />
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

const QuadroPrincipalForm = ({ control, errors }: QuadroPrincipalFormProps) => {
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParams>>();
	return (
		<View>
			<FormFieldsContainer>
				<Label>Disjuntor Quadro Principal</Label>
				<Controller
					control={control}
					name="disjuntorQuadroPrincipalQpe"
					render={({ field: { onChange, value } }) => (
						<Input.Root>
							<Input.Input
								value={value || ""}
								placeholderText="ex.: 50A"
								onChange={onChange}
							/>
							<Input.ErrorText
								ErrorText={errors.disjuntorQuadroPrincipalQpe?.message}
							/>
						</Input.Root>
					)}
				/>
			</FormFieldsContainer>

			<FormFieldsContainer>
				<Label>Condições Quadro Distribuição Principal de Energia</Label>
				<Controller
					control={control}
					name="condicaoQuadroPrincipalDTO.condicao"
					render={({ field: { onChange, value } }) => (
						<Input.Root>
							<Input.Input
								value={value || ""}
								placeholderText="ex.: Bom, Regular, Ruim"
								onChange={onChange}
							/>
							<Input.ErrorText
								ErrorText={errors.condicaoQuadroPrincipalDTO?.message}
							/>
						</Input.Root>
					)}
				/>
			</FormFieldsContainer>

			<FormFieldsContainer>
				<Label>
					Bitola do Condutor de Entrada no Quadro (Antes do Disjuntor Geral)
				</Label>
				<Controller
					control={control}
					name="bitolaCondutorEntradaQuadro"
					render={({ field: { onChange, value } }) => (
						<Input.Root>
							<Input.Input
								value={value || ""}
								placeholderText="ex.: 10mm²"
								onChange={onChange}
							/>
							<Input.ErrorText
								ErrorText={errors.bitolaCondutorEntradaQuadro?.message}
							/>
						</Input.Root>
					)}
				/>
			</FormFieldsContainer>

			<FormFieldsContainer>
				<Label>Aterramento</Label>
				<Controller
					control={control}
					name="aterramentoQpe"
					render={({ field: { onChange, value } }) => (
						<Input.Root>
							<Input.Input
								value={value || ""}
								placeholderText="ex.: Sim, Não"
								onChange={onChange}
							/>
							<Input.ErrorText ErrorText={errors.aterramentoQpe?.message} />
						</Input.Root>
					)}
				/>
			</FormFieldsContainer>
		</View>
	);
};

export default QuadroPrincipalFormScreen;

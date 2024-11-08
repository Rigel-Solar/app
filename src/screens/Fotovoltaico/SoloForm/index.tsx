import { Button } from "@/components/form/button";
import { FormFieldsContainer } from "@/components/form/form";
import { Input } from "@/components/form/input";
import { useAppDispatch } from "@/redux/hooks/useApp";
import { updateSolo } from "@/redux/reducers/fotovoltaico-reducer";
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
import { ButtonArea, Form, Label } from "../styles";

interface SoloFormProps {
	control: any;
	errors: any;
}

const SoloFormScreen = () => {
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
		dispatch(updateSolo(formData));
		navigation.navigate("telhadoForm", { orderData: orderData });
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
				<SoloForm control={control} errors={errors} />
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

const SoloForm = ({ control, errors }: SoloFormProps) => {
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParams>>();
	return (
		<View>
			<FormFieldsContainer>
				<Label>Tipo de Solo</Label>
				<Controller
					control={control}
					name="tipoSolo"
					render={({ field: { onChange, value } }) => (
						<Input.Root>
							<Input.Input
								value={value || ""}
								placeholderText="ex.: Areia, Argila"
								onChange={onChange}
							/>
							<Input.ErrorText ErrorText={errors.tipoSolo?.message} />
						</Input.Root>
					)}
				/>
			</FormFieldsContainer>

			<FormFieldsContainer>
				<Label>Condiciones do Solo</Label>
				<Controller
					control={control}
					name="condicaoSolo"
					render={({ field: { onChange, value } }) => (
						<Input.Root>
							<Input.Input
								value={value || ""}
								placeholderText="ex.: Bom, Regular, Ruim"
								onChange={onChange}
							/>
							<Input.ErrorText ErrorText={errors.condicaoSolo?.message} />
						</Input.Root>
					)}
				/>
			</FormFieldsContainer>

			<FormFieldsContainer>
				<Label>Presença de Rocha</Label>
				<Controller
					control={control}
					name="presencaRocha"
					render={({ field: { onChange, value } }) => (
						<Input.Root>
							<Input.Input
								value={value || ""}
								placeholderText="ex.: Sim, Não"
								onChange={onChange}
							/>
							<Input.ErrorText ErrorText={errors.presencaRocha?.message} />
						</Input.Root>
					)}
				/>
			</FormFieldsContainer>

			<FormFieldsContainer>
				<Label>Profundidade do Solo</Label>
				<Controller
					control={control}
					name="profundidadeSolo"
					render={({ field: { onChange, value } }) => (
						<Input.Root>
							<Input.Input
								value={value || ""}
								placeholderText="ex.: 1.5m"
								onChange={onChange}
							/>
							<Input.ErrorText ErrorText={errors.profundidadeSolo?.message} />
						</Input.Root>
					)}
				/>
			</FormFieldsContainer>
		</View>
	);
};

export default SoloFormScreen;

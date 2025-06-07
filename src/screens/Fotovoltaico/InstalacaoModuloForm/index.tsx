import { Button } from "@/components/form/button";
import { FormFieldsContainer } from "@/components/form/form";
import { Input } from "@/components/form/input";
import { useAppDispatch } from "@/redux/hooks/useApp";
import { updateLocalInstalacao } from "@/redux/reducers/fotovoltaico-reducer";
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

interface InstalacaoModuloFormProps {
	control: any;
	errors: any;
}

const InstalacaoModuloFormScreen = () => {
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
		dispatch(updateLocalInstalacao(formData));
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
				<InstalacaoModuloForm control={control} errors={errors} />
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

const InstalacaoModuloForm = ({
	control,
	errors,
}: InstalacaoModuloFormProps) => {
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParams>>();
	return (
		<View>
			<FormFieldsContainer>
				<Label>Local</Label>
				<Controller
					control={control}
					name="localInstalacaoModuloDTO.local"
					render={({ field: { onChange, value } }) => (
						<Input.Root>
							<Input.Input
								value={value || ""}
								placeholderText="ex.: Telhado, Solo"
								onChange={onChange}
							/>
							<Input.ErrorText
								ErrorText={errors.localInstalacaoModuloDTO?.message}
							/>
						</Input.Root>
					)}
				/>
			</FormFieldsContainer>

			<FormFieldsContainer>
				<Label>Idade do Telhado</Label>
				<Controller
					control={control}
					name="idadeTelhadoDTO.idade"
					render={({ field: { onChange, value } }) => (
						<Input.Root>
							<Input.Input
								value={value || ""}
								placeholderText="ex.: 10 anos"
								onChange={onChange}
							/>
							<Input.ErrorText ErrorText={errors.idadeTelhadoDTO?.message} />
						</Input.Root>
					)}
				/>
			</FormFieldsContainer>

			<FormFieldsContainer>
                                <Label>Material das Vigas do Telhado</Label>
                                <Controller
                                        control={control}
                                        name="materialVigasTelhadoDTO.condicao"
					render={({ field: { onChange, value } }) => (
						<Input.Root>
							<Input.Input
								value={value || ""}
								placeholderText="ex.: Madeira, Metal"
								onChange={onChange}
							/>
                                                        <Input.ErrorText
                                                                ErrorText={errors.materialVigasTelhadoDTO?.condicao?.message}
                                                        />
						</Input.Root>
					)}
				/>
			</FormFieldsContainer>

			<FormFieldsContainer>
				<Label>Condições das Vigas</Label>
				<Controller
					control={control}
					name="condicaoVigaDTO.condicao"
					render={({ field: { onChange, value } }) => (
						<Input.Root>
							<Input.Input
								value={value || ""}
								placeholderText="ex.: Boa, Média, Ruim"
								onChange={onChange}
							/>
							<Input.ErrorText ErrorText={errors.condicaoVigaDTO?.message} />
						</Input.Root>
					)}
				/>
			</FormFieldsContainer>
		</View>
	);
};

export default InstalacaoModuloFormScreen;

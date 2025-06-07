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
               formState: { errors },
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
                                <Label>Largura do Solo (m)</Label>
                                <Controller
                                        control={control}
                                        name="larguraSolo"
                                        render={({ field: { onChange, value } }) => (
                                                <Input.Root>
                                                        <Input.Input
                                                                value={value?.toString() || ""}
                                                                placeholderText="ex.: 1.5"
                                                                onChange={(text) => {
                                                                        const num = parseFloat(text);
                                                                        onChange(isNaN(num) ? text : num);
                                                                }}
                                                                keyboardType="numeric"
                                                        />
                                                        <Input.ErrorText ErrorText={errors.larguraSolo?.message} />
                                                </Input.Root>
                                        )}
                                />
                        </FormFieldsContainer>
			<FormFieldsContainer>
                                <Label>Condições do Solo</Label>
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
                                <Label>Comprimento do Solo (m)</Label>
                                <Controller
                                        control={control}
                                        name="comprimentoSolo"
                                        render={({ field: { onChange, value } }) => (
                                                <Input.Root>
                                                        <Input.Input
                                                                value={value?.toString() || ""}
                                                                placeholderText="ex.: 5.0"
                                                                onChange={(text) => {
                                                                        const num = parseFloat(text);
                                                                        onChange(isNaN(num) ? text : num);
                                                                }}
                                                                keyboardType="numeric"
                                                        />
                                                        <Input.ErrorText ErrorText={errors.comprimentoSolo?.message} />
                                                </Input.Root>
                                        )}
                                />
                        </FormFieldsContainer>
                        <FormFieldsContainer>
                                <Label>Nivelamento do Solo</Label>
                                <Controller
                                        control={control}
                                        name="nivelamentoSoloDTO.nivelamento"
                                        render={({ field: { onChange, value } }) => (
                                                <Input.Root>
                                                        <Input.Input
                                                                value={value || ""}
                                                                placeholderText="ex.: Plano, Irregular"
                                                                onChange={onChange}
                                                        />
                                                        <Input.ErrorText ErrorText={errors.nivelamentoSoloDTO?.nivelamento?.message} />
                                                </Input.Root>
                                        )}
                                />
                        </FormFieldsContainer>
                        <FormFieldsContainer>
                                <Label>Tipo de Superfície</Label>
                                <Controller
                                        control={control}
                                        name="tipoSuperficieDTO.tipo"
                                        render={({ field: { onChange, value } }) => (
                                                <Input.Root>
                                                        <Input.Input
                                                                value={value || ""}
                                                                placeholderText="ex.: Terra, Concreto"
                                                                onChange={onChange}
                                                        />
                                                        <Input.ErrorText ErrorText={errors.tipoSuperficieDTO?.tipo?.message} />
                                                </Input.Root>
                                        )}
                                />
                        </FormFieldsContainer>
		</View>
	);
};

export default SoloFormScreen;

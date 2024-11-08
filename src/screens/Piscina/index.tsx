import { Button } from "@/components/form/button";
import { FormFieldsContainer } from "@/components/form/form";
import { Input } from "@/components/form/input";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/useApp";
import { PiscinaTS, setPiscina } from "@/redux/reducers/piscina-reducer";
import { RootStackParams } from "@/routes/tab-routes";
import { piscinaSchema } from "@/utils/schemas/schema-piscina";
import { useMutationQuery } from "@/utils/services/hooks/useMutationQuery";
import { Ionicons } from "@expo/vector-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Alert } from "react-native";
import { VistoriaRouteProp } from "../Vistoria";
import * as C from "./styles";

export default function Piscina() {
	const route = useRoute<VistoriaRouteProp>();
	const { orderData } = route.params;
	const dispatch = useAppDispatch();
	const piscina = useAppSelector((state) => state.piscina.piscina);
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParams>>();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<PiscinaTS>({
		resolver: yupResolver(piscinaSchema),
		defaultValues: piscina,
	});

	const {
		mutate: onCreate,
		isLoading,
		isError,
	} = useMutationQuery(`/FichaPiscina`, "post");

	const onSubmit: SubmitHandler<PiscinaTS> = async (formData: PiscinaTS) => {
		formData.idVistoria = orderData.id;
		console.log(JSON.stringify(formData));
		onCreate(formData, {
			onSuccess: () => {
				Alert.alert("Relatório criado!");
				dispatch(setPiscina({}));
				navigation.goBack();
			},
			onError: (error) => {
				Alert.alert(
					"Não foi possível enviar",
					"Sua requisição não foi enviada, mas salvamos seu relatório!"
				);
				dispatch(setPiscina(formData));
				console.log("Erro", error);
				navigation.goBack();
			},
		});
	};

	return (
		<C.Container>
			<C.Form
				contentContainerStyle={{
					rowGap: 20,
				}}
			>
				<FormFieldsContainer>
					<C.Label>Largura</C.Label>
					<Controller
						control={control}
						name="largura"
						render={({ field: { onChange, value } }) => (
							<Input.Root>
								<Input.Input
									keyboardType="numeric"
									inputMode="numeric"
									value={value?.toString()?.toString() || ""}
									placeholderText="Quantidade em metros. ex.: 3"
									onChange={onChange}
								/>
								<Input.ErrorText ErrorText={errors.largura?.message} />
							</Input.Root>
						)}
					/>
				</FormFieldsContainer>
				<FormFieldsContainer>
					<C.Label>Comprimento</C.Label>
					<Controller
						control={control}
						name="comprimento"
						render={({ field: { onChange, value } }) => (
							<Input.Root>
								<Input.Input
									value={value?.toString()?.toString() || ""}
									placeholderText="Quantidade em metros. ex.: 3"
									onChange={onChange}
								/>
								<Input.ErrorText ErrorText={errors.comprimento?.message} />
							</Input.Root>
						)}
					/>
				</FormFieldsContainer>
				<FormFieldsContainer>
					<C.Label>Profundidade Média</C.Label>
					<Controller
						control={control}
						name="profundidade"
						render={({ field: { onChange, value } }) => (
							<Input.Root>
								<Input.Input
									value={value?.toString() || ""}
									placeholderText="Quantidade em metros. ex.: 3"
									onChange={onChange}
								/>
								<Input.ErrorText ErrorText={errors.profundidade?.message} />
							</Input.Root>
						)}
					/>
				</FormFieldsContainer>
				<FormFieldsContainer>
					<C.Label>Temperatura desejada</C.Label>
					<Controller
						control={control}
						name="temperatura"
						render={({ field: { onChange, value } }) => (
							<Input.Root>
								<Input.Input
									value={value?.toString() || ""}
									placeholderText="Quantidade em metros. ex.: 3"
									onChange={onChange}
								/>
								<Input.ErrorText ErrorText={errors.temperatura?.message} />
							</Input.Root>
						)}
					/>
				</FormFieldsContainer>
				<FormFieldsContainer>
					<C.Label>Uso Capa Térmica</C.Label>
					<Controller
						control={control}
						name="usoCapaTermica"
						render={({ field: { onChange, value } }) => (
							<Input.Root>
								<Input.Input
									value={value?.toString() || ""}
									placeholderText="ex.: Sim"
									onChange={onChange}
								/>
								<Input.ErrorText ErrorText={errors.usoCapaTermica?.message} />
							</Input.Root>
						)}
					/>
				</FormFieldsContainer>
				<FormFieldsContainer>
					<C.Label>Região (1-Quente, 2-Fria, 3- Média)</C.Label>
					<Controller
						control={control}
						name="regiao"
						render={({ field: { onChange, value } }) => (
							<Input.Root>
								<Input.Input
									value={value?.toString() || ""}
									placeholderText="ex.: 3"
									onChange={onChange}
								/>
								<Input.ErrorText ErrorText={errors.usoCapaTermica?.message} />
							</Input.Root>
						)}
					/>
				</FormFieldsContainer>
				<FormFieldsContainer>
					<C.Label>Ambiente Ab/Fech</C.Label>
					<Controller
						control={control}
						name="ambiente"
						render={({ field: { onChange, value } }) => (
							<Input.Root>
								<Input.Input
									value={value?.toString() || ""}
									placeholderText="ex.: Ab/Fech"
									onChange={onChange}
								/>
								<Input.ErrorText ErrorText={errors.ambiente?.message} />
							</Input.Root>
						)}
					/>
				</FormFieldsContainer>
				{/* <FormFieldsContainer>
					<C.Label>Área</C.Label>
					<Controller
						control={control}
						name="area"
						render={({ field: { onChange, value } }) => (
							<Input.Root>
								<Input.Input
									value={value?.toString() || ""}
									placeholderText="Quantidade em metros. ex.: 3"
									onChange={onChange}
								/>
								<Input.ErrorText ErrorText={errors.area?.message} />
							</Input.Root>
						)}
					/>
				</FormFieldsContainer>
				<FormFieldsContainer>
					<C.Label>Volume</C.Label>
					<Controller
						control={control}
						name="volume"
						render={({ field: { onChange, value } }) => (
							<Input.Root>
								<Input.Input
									value={value?.toString() || ""}
									placeholderText="Quantidade em metros. ex.: 3"
									onChange={onChange}
								/>
								<Input.ErrorText ErrorText={errors.volume?.message} />
							</Input.Root>
						)}
					/>
				</FormFieldsContainer> */}
			</C.Form>

			<C.ButtonArea>
				<Button
					onPress={() => navigation.goBack()}
					icon={<Ionicons name="chevron-back" size={16} color="white" />}
				>
					Voltar
				</Button>
				<Button onPress={handleSubmit(onSubmit)}>Salvar</Button>
			</C.ButtonArea>
		</C.Container>
	);
}

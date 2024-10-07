import { Button } from "@/components/form/button";
import { FormFieldsContainer } from "@/components/form/form";
import { Input } from "@/components/form/input";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/useApp";
import { setBanho } from "@/redux/reducers/banho-reducer";
import { RootStackParams } from "@/routes/tab-routes";
import { banhoSchema, BanhoTS } from "@/utils/schemas/schema-banho";
import { Ionicons } from "@expo/vector-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as C from "./styles";

export default function Banho() {
	const dispatch = useAppDispatch();
	const banho = useAppSelector((state) => state.banho.banho);
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParams>>();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<BanhoTS>({
		resolver: yupResolver(banhoSchema),
		defaultValues: banho,
	});

	const onSubmit: SubmitHandler<BanhoTS> = async (formData: BanhoTS) => {
		dispatch(setBanho(formData));
		console.log(formData);
		navigation.goBack();
	};

	return (
		<C.Container>
			<C.Form
				contentContainerStyle={{
					rowGap: 20,
				}}
			>
				<FormFieldsContainer>
					<C.Label>Base da caixa d'água em relação a laje</C.Label>
					<Controller
						control={control}
						name="BaseCaixa"
						render={({ field: { onChange, value } }) => (
							<Input.Root>
								<Input.Input
									keyboardType="numeric"
									inputMode="numeric"
									value={value?.toString()?.toString() || ""}
									placeholderText="Quantidade em metros. ex.: 3"
									onChange={onChange}
								/>
								<Input.ErrorText ErrorText={errors.BaseCaixa?.message} />
							</Input.Root>
						)}
					/>
				</FormFieldsContainer>
				<FormFieldsContainer>
					<C.Label>Base do Boiler em relação a laje</C.Label>
					<Controller
						control={control}
						name="BaseBoiler"
						render={({ field: { onChange, value } }) => (
							<Input.Root>
								<Input.Input
									value={value?.toString()?.toString() || ""}
									placeholderText="Quantidade em metros. ex.: 3"
									onChange={onChange}
								/>
								<Input.ErrorText ErrorText={errors.BaseBoiler?.message} />
							</Input.Root>
						)}
					/>
				</FormFieldsContainer>
				<FormFieldsContainer>
					<C.Label>
						Distância do boiler para conexão de distribuição de água quente
					</C.Label>
					<Controller
						control={control}
						name="DistanciaBoiler"
						render={({ field: { onChange, value } }) => (
							<Input.Root>
								<Input.Input
									value={value?.toString() || ""}
									placeholderText="Quantidade em metros. ex.: 3"
									onChange={onChange}
								/>
								<Input.ErrorText ErrorText={errors.DistanciaBoiler?.message} />
							</Input.Root>
						)}
					/>
				</FormFieldsContainer>
				<FormFieldsContainer>
					<C.Label>
						Registro de 1” na saída da caixa d´água, exclusivo para alimentação
						do Boiler
					</C.Label>
					<Controller
						control={control}
						name="RegistroCaixa"
						render={({ field: { onChange, value } }) => (
							<Input.Root>
								<Input.Input
									value={value?.toString() || ""}
									placeholderText="Quantidade em metros. ex.: 3"
									onChange={onChange}
								/>
								<Input.ErrorText ErrorText={errors.RegistroCaixa?.message} />
							</Input.Root>
						)}
					/>
				</FormFieldsContainer>
				<FormFieldsContainer>
					<C.Label>
						Registro de 1" no barrilete de água quente a + ou - 1,00 metro do
						Boiler
					</C.Label>
					<Controller
						control={control}
						name="RegistroBarrilete"
						render={({ field: { onChange, value } }) => (
							<Input.Root>
								<Input.Input
									value={value?.toString() || ""}
									placeholderText="Quantidade em metros. ex.: 3"
									onChange={onChange}
								/>
								<Input.ErrorText
									ErrorText={errors.RegistroBarrilete?.message}
								/>
							</Input.Root>
						)}
					/>
				</FormFieldsContainer>
				<FormFieldsContainer>
					<C.Label>Disjuntor bipolar de 20A para resistência (Boiler)</C.Label>
					<Controller
						control={control}
						name="DisjuntorBipolar"
						render={({ field: { onChange, value } }) => (
							<Input.Root>
								<Input.Input
									value={value?.toString() || ""}
									placeholderText="Quantidade em metros. ex.: 3"
									onChange={onChange}
								/>
								<Input.ErrorText ErrorText={errors.DisjuntorBipolar?.message} />
							</Input.Root>
						)}
					/>
				</FormFieldsContainer>
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

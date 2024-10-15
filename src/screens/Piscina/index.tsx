<<<<<<< HEAD
import { Button } from "@/components/form/button";
import { FormFieldsContainer } from "@/components/form/form";
import { Input } from "@/components/form/input";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/useApp";
import { setBanho } from "@/redux/reducers/banho-reducer";
import { PiscinaTS } from "@/redux/reducers/piscina-reducer";
import { RootStackParams } from "@/routes/tab-routes";
import { piscinaSchema } from "@/utils/schemas/schema-piscina";
import { Ionicons } from "@expo/vector-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as C from "./styles";
=======
import { Button } from '@/components/form/button';
import { FormFieldsContainer } from '@/components/form/form';
import { Input } from '@/components/form/input';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/useApp';
import { setPiscina } from '@/redux/reducers/piscina-reducer';
import { RootStackParams } from '@/routes/tab-routes';
import { PiscinaTS, piscinaSchema } from '@/utils/schemas/schema-piscina';
import { Ionicons } from '@expo/vector-icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as C from './styles';
>>>>>>> 25a5588d41bd67d64bd9f9ac6164f4d73af11cbe

export default function Piscina() {
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

	const onSubmit: SubmitHandler<PiscinaTS> = async (formData: PiscinaTS) => {
<<<<<<< HEAD
		dispatch(setBanho(formData));
=======
		dispatch(setPiscina(formData));
>>>>>>> 25a5588d41bd67d64bd9f9ac6164f4d73af11cbe
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
<<<<<<< HEAD
				<FormFieldsContainer>
					<C.Label>Largura</C.Label>
					<Controller
						control={control}
						name="largura"
=======
				<C.Title>Dados da Piscina</C.Title>
				<FormFieldsContainer>
					<C.Label>Comprimento</C.Label>
					<Controller
						control={control}
						name="Comprimento"
>>>>>>> 25a5588d41bd67d64bd9f9ac6164f4d73af11cbe
						render={({ field: { onChange, value } }) => (
							<Input.Root>
								<Input.Input
									keyboardType="numeric"
									inputMode="numeric"
<<<<<<< HEAD
									value={value?.toString()?.toString() || ""}
									placeholderText="Quantidade em metros. ex.: 3"
									onChange={onChange}
								/>
								<Input.ErrorText ErrorText={errors.largura?.message} />
=======
									value={value?.toString()?.toString() || ''}
									placeholderText="Quantidade em metros. ex.: 3"
									onChange={onChange}
								/>
								<Input.ErrorText ErrorText={errors.Comprimento?.message} />
>>>>>>> 25a5588d41bd67d64bd9f9ac6164f4d73af11cbe
							</Input.Root>
						)}
					/>
				</FormFieldsContainer>
				<FormFieldsContainer>
<<<<<<< HEAD
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
=======
					<C.Label>Largura</C.Label>
					<Controller
						control={control}
						name="Largura"
						render={({ field: { onChange, value } }) => (
							<Input.Root>
								<Input.Input
									keyboardType="numeric"
									inputMode="numeric"
									value={value?.toString()?.toString() || ''}
									placeholderText="Quantidade em metros. ex.: 3"
									onChange={onChange}
								/>
								<Input.ErrorText ErrorText={errors.Largura?.message} />
>>>>>>> 25a5588d41bd67d64bd9f9ac6164f4d73af11cbe
							</Input.Root>
						)}
					/>
				</FormFieldsContainer>
				<FormFieldsContainer>
<<<<<<< HEAD
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
=======
					<C.Label>Profundidade</C.Label>
					<Controller
						control={control}
						name="Profundidade"
						render={({ field: { onChange, value } }) => (
							<Input.Root>
								<Input.Input
									keyboardType="numeric"
									inputMode="numeric"
									value={value?.toString() || ''}
									placeholderText="Quantidade em metros. ex.: 3"
									onChange={onChange}
								/>
								<Input.ErrorText ErrorText={errors.Profundidade?.message} />
>>>>>>> 25a5588d41bd67d64bd9f9ac6164f4d73af11cbe
							</Input.Root>
						)}
					/>
				</FormFieldsContainer>
				<FormFieldsContainer>
<<<<<<< HEAD
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
=======
					<C.Label>Temperatura desejada da Água</C.Label>
					<Controller
						control={control}
						name="TemperaturaAgua"
						render={({ field: { onChange, value } }) => (
							<Input.Root>
								<Input.Input
									keyboardType="numeric"
									inputMode="numeric"
									value={value?.toString() || ''}
									placeholderText="Quantidade em Cº. ex.: 20"
									onChange={onChange}
								/>
								<Input.ErrorText ErrorText={errors.TemperaturaAgua?.message} />
>>>>>>> 25a5588d41bd67d64bd9f9ac6164f4d73af11cbe
							</Input.Root>
						)}
					/>
				</FormFieldsContainer>
				<FormFieldsContainer>
<<<<<<< HEAD
					<C.Label>Uso Capa Térmica</C.Label>
					<Controller
						control={control}
						name="usoCapaTermica"
						render={({ field: { onChange, value } }) => (
							<Input.Root>
								<Input.Input
									value={value?.toString() || ""}
									placeholderText="Quantidade em metros. ex.: 3"
									onChange={onChange}
								/>
								<Input.ErrorText ErrorText={errors.usoCapaTermica?.message} />
=======
					<C.Label>Uso da Capa térmica</C.Label>
					<Controller
						control={control}
						name="UsoCapaTermica"
						render={({ field: { onChange, value } }) => (
							<Input.Root>
								<Input.Input
									value={value?.toString() || ''}
									placeholderText="ex.: Sim"
									onChange={onChange}
								/>
								<Input.ErrorText ErrorText={errors.UsoCapaTermica?.message} />
>>>>>>> 25a5588d41bd67d64bd9f9ac6164f4d73af11cbe
							</Input.Root>
						)}
					/>
				</FormFieldsContainer>
				<FormFieldsContainer>
<<<<<<< HEAD
					<C.Label>Ambiente Ab/Fech</C.Label>
					<Controller
						control={control}
						name="ambiente"
						render={({ field: { onChange, value } }) => (
							<Input.Root>
								<Input.Input
									value={value?.toString() || ""}
									placeholderText="Quantidade em metros. ex.: 3"
									onChange={onChange}
								/>
								<Input.ErrorText ErrorText={errors.ambiente?.message} />
=======
					<C.Label> Região (1-Quente, 2-Fria, 3- Média)</C.Label>
					<Controller
						control={control}
						name="Regiao"
						render={({ field: { onChange, value } }) => (
							<Input.Root>
								<Input.Input
									keyboardType="numeric"
									inputMode="numeric"
									value={value?.toString() || ''}
									placeholderText="ex.: 1"
									onChange={onChange}
								/>
								<Input.ErrorText ErrorText={errors.Regiao?.message} />
>>>>>>> 25a5588d41bd67d64bd9f9ac6164f4d73af11cbe
							</Input.Root>
						)}
					/>
				</FormFieldsContainer>
				<FormFieldsContainer>
<<<<<<< HEAD
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
=======
					<C.Label>Ambiente aberto ou fechado (A/F)</C.Label>
					<Controller
						control={control}
						name="Ambiente"
						render={({ field: { onChange, value } }) => (
							<Input.Root>
								<Input.Input
									value={value?.toString() || ''}
									placeholderText="ex.: A"
									onChange={onChange}
								/>
								<Input.ErrorText ErrorText={errors.Ambiente?.message} />
>>>>>>> 25a5588d41bd67d64bd9f9ac6164f4d73af11cbe
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

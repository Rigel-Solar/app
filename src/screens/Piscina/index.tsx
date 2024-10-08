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
		dispatch(setPiscina(formData));
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
				<C.Title>Dados da Piscina</C.Title>
				<FormFieldsContainer>
					<C.Label>Comprimento</C.Label>
					<Controller
						control={control}
						name="Comprimento"
						render={({ field: { onChange, value } }) => (
							<Input.Root>
								<Input.Input
									keyboardType="numeric"
									inputMode="numeric"
									value={value?.toString()?.toString() || ''}
									placeholderText="Quantidade em metros. ex.: 3"
									onChange={onChange}
								/>
								<Input.ErrorText ErrorText={errors.Comprimento?.message} />
							</Input.Root>
						)}
					/>
				</FormFieldsContainer>
				<FormFieldsContainer>
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
							</Input.Root>
						)}
					/>
				</FormFieldsContainer>
				<FormFieldsContainer>
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
							</Input.Root>
						)}
					/>
				</FormFieldsContainer>
				<FormFieldsContainer>
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
							</Input.Root>
						)}
					/>
				</FormFieldsContainer>
				<FormFieldsContainer>
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
							</Input.Root>
						)}
					/>
				</FormFieldsContainer>
				<FormFieldsContainer>
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
							</Input.Root>
						)}
					/>
				</FormFieldsContainer>
				<FormFieldsContainer>
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

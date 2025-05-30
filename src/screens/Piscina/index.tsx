import { Button } from "@/components/form/button";
import { FormFieldsContainer } from "@/components/form/form";
import { Input } from "@/components/form/input";
import { ImagePickerButton } from "@/components/imagePickerButton";
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
import { useState } from "react";

interface PhotosData {
	Fotos: Array<{ uri: string; name: string; type: string }>;
	CodigoFicha: number;
	TipoFicha: number;
}


export default function Piscina() {
	const [selectedPhotos, setSelectedPhotos] = useState<{ uri: string; name: string; type: string }[]>([]);
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

	const handlePhotoSelect = (file: { uri: string; name: string; type: string }) => {
		setSelectedPhotos((prev) => [...prev, file]);
	};

	const uploadPhotos = async (photosData: PhotosData) => {
		const formData = new FormData();

		photosData.Fotos.forEach((photo, index) => {
			formData.append('Fotos', {
				uri: photo.uri,
				name: photo.name,
				type: photo.type,
			} as any);
		});
	}

	const onSubmit: SubmitHandler<PiscinaTS> = async (formData: PiscinaTS) => {
		formData.idVistoria = orderData.id;

		onCreate(formData, {
			onSuccess: async (response) => {
				console.log("response:", response)

				if (selectedPhotos.length > 0) {
					const photosData: PhotosData = {
						Fotos: selectedPhotos,
						CodigoFicha: orderData.id,
						TipoFicha: 3,
					};

					console.log(selectedPhotos);
					console.log(photosData);

					try {
						await uploadPhotos(photosData);
						Alert.alert('Relatório e fotos enviados com sucesso!');
						dispatch(setPiscina({}));
						navigation.goBack();
					} catch (error) {
						console.error('Erro ao enviar fotos:', error);
						Alert.alert(
							'Parcialmente enviado',
							'O relatório foi salvo, mas houve um erro ao enviar as fotos.'
						);
						dispatch(setPiscina(formData));
						navigation.goBack();
					}
				} else {
					Alert.alert('Relatório criado!');
					dispatch(setPiscina({}));
					navigation.goBack();
				}
			},
			onError: (error) => {
				Alert.alert(
					'Não foi possível enviar',
					'Sua requisição não foi enviada, mas salvamos seu relatório!'
				);
				dispatch(setPiscina(formData));
				console.log('Erro', error);
				navigation.goBack();
			},
		});
	}

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
				<FormFieldsContainer>
					<C.Label>Fotos do local</C.Label>
					<ImagePickerButton
						selectText={`Selecionar fotos ${selectedPhotos.length > 0 ? `(${selectedPhotos.length})` : ''
							}`}
						selectedText={`${selectedPhotos.length} fotos selecionadas`}
						allowMultiple={true}
						aspect={[9, 16]}
						resizeWidth={900}
						onImageSelect={handlePhotoSelect}
						buttonStyle={{
							backgroundColor: '#007AFF',
							width: '100%',
						}}
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


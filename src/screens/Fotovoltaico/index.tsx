import { Button } from "@/components/form/button";
import { FormFieldsContainer } from "@/components/form/form";
import { Input } from "@/components/form/input";
import { useAppDispatch } from "@/redux/hooks/useApp";
import { setFotovoltaico } from "@/redux/reducers/fotovoltaico-reducer";
import { RootStackParams } from "@/routes/tab-routes";
import {
	fotovoltaicoSchema,
	FotovoltaicoTS,
} from "@/utils/schemas/schema-fotovoltaico";
import { Ionicons } from "@expo/vector-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as C from "./styles";

export default function FotovoltaicoForm() {
	const dispatch = useAppDispatch();
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParams>>();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FotovoltaicoTS>({
		resolver: yupResolver(fotovoltaicoSchema),
		defaultValues: {},
	});

	const onSubmit: SubmitHandler<FotovoltaicoTS> = (data: FotovoltaicoTS) => {
		dispatch(setFotovoltaico(data));
		console.log("Dados enviados:", data);
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
						name="areaOcupacaoQpe"
						render={({ field: { onChange, value } }) => (
							<Input.Root>
								<Input.Input
									keyboardType="numeric"
									inputMode="numeric"
									value={value?.toString()?.toString() || ""}
									placeholderText="Quantidade em metros. ex.: 3"
									onChange={onChange}
								/>
								<Input.ErrorText ErrorText={errors.areaOcupacaoQpe?.message} />
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

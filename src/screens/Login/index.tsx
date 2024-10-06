
import { useAppDispatch, useAppSelector } from "@/redux/hooks/useApp";
import { signInUser } from "@/redux/reducers/user-reducer";
import { schemaLogin } from "@/utils/schemas/schema-login";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ActivityIndicator } from "react-native";
import * as C from "./styles";
import { Input } from "@/components/input";
import { BackButton } from "@/components/back-button";

interface ILogin {
	email: string;
	password: string;
}

export default function Login() {
	const dispatch = useAppDispatch();
	const { loading, error } = useAppSelector((state) => state.user);

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<ILogin>({
		resolver: yupResolver(schemaLogin),
	});

	const onSubmit: SubmitHandler<ILogin> = async (formData: ILogin) => {
		await dispatch(signInUser(formData));
	};

	return (
		<C.Container>
			<C.Wrapper>
				<C.Form>
					<BackButton />
					{error && (
						<C.ViewError>
							<C.TextError>Usuário nao encontrado</C.TextError>
						</C.ViewError>
					)}
					<C.Label>E-mail</C.Label>
					<Controller
						control={control}
						name="email"
						render={({ field: { onChange } }) => (
							<Input.Root>
								<Input.Input placeholderText="E-mail" onChange={onChange} />
								<Input.ErrorText ErrorText={errors.email?.message} />
							</Input.Root>
						)}
					/>
					<C.Label>Senha</C.Label>
					<Controller
						control={control}
						name="password"
						render={({ field: { onChange } }) => (
							<Input.Root>
								<Input.Input
									placeholderText="1234"
									hasSecureTextEntry
									onChange={onChange}
								/>
								<Input.ErrorText ErrorText={errors.password?.message} />
							</Input.Root>
						)}
					/>
				</C.Form>
				<C.Button onPress={handleSubmit(onSubmit)}>
					<C.ButtonText>
						{loading ? <ActivityIndicator /> : "Login"}
					</C.ButtonText>
				</C.Button>
			</C.Wrapper>
		</C.Container>
	);
}

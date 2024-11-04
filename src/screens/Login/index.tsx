import { Input } from "@/components/form/input";
import { useAppDispatch } from "@/redux/hooks/useApp";
import { addToken, LoginTS } from "@/redux/reducers/user-reducer";
import { loginSchema } from "@/utils/schemas/schema-login";
import { useMutationQuery } from "@/utils/services/hooks/useMutationQuery";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ActivityIndicator } from "react-native";
import * as C from "./styles";

export default function Login() {
	const dispatch = useAppDispatch();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginTS>({
		resolver: yupResolver(loginSchema),
	});

	const {
		mutate: onLogin,
		isLoading,
		isError,
	} = useMutationQuery(`/Auth/`, "post");

	const onSubmit: SubmitHandler<LoginTS> = async (formData: LoginTS) => {
		console.log(formData)
		onLogin(formData, {
			onSuccess: (response) => {
				dispatch(addToken(response.data.token));
			},
			onError: (error) => {
				console.log("Erro", error);
			},
		});
	};

	return (
		<C.Container>
			<C.Wrapper>
				<C.Form>
					{isError && (
						<C.ViewError>
							<C.TextError>Usuário nao encontrado</C.TextError>
						</C.ViewError>
					)}
					<C.Label>Digite seu e-mail</C.Label>
					<Controller
						control={control}
						name="email"
						render={({ field: { onChange } }) => (
							<Input.Root>
								<Input.Input
									placeholderText="eve.holt@reqres.in"
									onChange={onChange}
								/>
								<Input.ErrorText ErrorText={errors.email?.message} />
							</Input.Root>
						)}
					/>
					<C.Label>Digite sua senha</C.Label>
					<Controller
						control={control}
						name="password"
						render={({ field: { onChange } }) => (
							<Input.Root>
								<Input.Input
									placeholderText="********"
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
						{isLoading ? <ActivityIndicator /> : "Login"}
					</C.ButtonText>
				</C.Button>
			</C.Wrapper>
		</C.Container>
	);
}

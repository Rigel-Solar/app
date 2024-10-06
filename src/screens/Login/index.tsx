import { Input } from "@/components/input";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/useApp";
import { signInUser } from "@/redux/reducers/user-reducer";
import { loginSchema } from "@/utils/schemas/schema-login";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ActivityIndicator } from "react-native";
import * as C from "./styles";

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
		resolver: yupResolver(loginSchema),
	});

	const onSubmit: SubmitHandler<ILogin> = async (formData: ILogin) => {
		await dispatch(signInUser(formData));
		console.log(error);
	};

	return (
		<C.Container>
			<C.Wrapper>
				<C.Form>
					{error && (
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
						{loading ? <ActivityIndicator /> : "Login"}
					</C.ButtonText>
				</C.Button>
			</C.Wrapper>
		</C.Container>
	);
}

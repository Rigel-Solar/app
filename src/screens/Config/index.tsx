import { BackButton } from "@/components/back-button";
import Setting from "@/components/setting";
import { User } from "@/components/user";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/useApp";
import { setThemeStatus } from "@/redux/reducers/theme-reducer";
import { onLogout } from "@/redux/reducers/user-reducer";
import { Feather } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import * as C from "./styles";

export default function Config() {
	const dispatch = useAppDispatch();
	const user = useAppSelector((state) => state.user.user);
	const theme = useAppSelector((state) => state.theme);

	const handleModeToggle = () => {
		dispatch(setThemeStatus(theme.status === "dark" ? "light" : "dark"));
	};

	return (
		<C.Container>
			<C.Header>
				<BackButton />
				<C.ButtonMode onPress={handleModeToggle}>
					<Feather
						name={theme.status === "dark" ? "moon" : "sun"}
						size={24}
						color={theme.status === "dark" ? "white" : "black"}
					/>
				</C.ButtonMode>
			</C.Header>
			<C.Main>
				<C.ProfileArea>
					<User />
					<C.Name>Malcolm Lima</C.Name>
					<C.Email>malcolmlima@email.com</C.Email>
				</C.ProfileArea>

				<C.Category>Contéudo</C.Category>
				<Setting
					ItemTitle="Logout"
					icon={<MaterialIcons name="logout" size={20} color="black" />}
					onPress={() => dispatch(onLogout())}
				/>
			</C.Main>
		</C.Container>
	);
}

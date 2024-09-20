import { NavigationContainer } from "@react-navigation/native";

import { setThemeStatus } from "@/redux/reducers/theme-reducer";
import themes from "@/styles/themes";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { useAppDispatch, useAppSelector } from "../redux/hooks/useApp";
import { AppRoutes } from "./tab-routes";

const Routes = () => {
	const dispatch = useAppDispatch();
	const deviceTheme = useColorScheme();
	const state = useAppSelector((state) => state.theme);
	const theme = deviceTheme ? themes[state.status] : themes.dark;

	useEffect(() => {
		dispatch(setThemeStatus(deviceTheme));
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<NavigationContainer>
				<AppRoutes />
			</NavigationContainer>
		</ThemeProvider>
	);
};

export default Routes;

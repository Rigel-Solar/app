import { useAppSelector } from "@/redux/hooks/useApp";
import Banho from "@/screens/Banho";
import Config from "@/screens/Config";
import Home from "@/screens/Home";
import Login from "@/screens/Login";
import Vistoria from "@/screens/Vistoria";
import { AntDesign, Octicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type RootStackParams = {
	bottomBar: any;
	home: any;
	config: any;
	vistoria: any;
	login: any;
	banho: any;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParams>();

const TabRoutes = () => {
	const theme = useAppSelector((state) => state.theme);

	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: "#0066d2",
				tabBarShowLabel: false,
				tabBarStyle: {
					height: 60,
					paddingTop: 5,
					paddingBottom: 10,
					borderTopWidth: 0,
					backgroundColor: `${theme.status === "dark" ? "#202020" : "#fff"}`,
				},
			}}
		>
			<Tab.Screen
				name="home"
				component={Home}
				options={{
					tabBarIcon: ({ color }) => (
						<Octicons name="home" color={color} size={24} />
					),
				}}
			/>
			<Tab.Screen
				name="config"
				component={Config}
				options={{
					tabBarIcon: ({ color }) => (
						<AntDesign name="setting" size={24} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default TabRoutes;

export function AppRoutes() {
	const user = useAppSelector((state) => state.user);
	return (
		<NavigationContainer independent>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<>
					{user.token ? (
						<>
							<Stack.Screen
								name="bottomBar"
								component={TabRoutes}
								options={{ headerShown: false }}
							/>
							<Stack.Screen
								name="vistoria"
								component={Vistoria}
								options={{ headerShown: false }}
							/>
							<Stack.Screen
								name="banho"
								component={Banho}
								options={{ headerShown: false }}
							/>
						</>
					) : (
						<Stack.Screen name="login" component={Login} />
					)}
				</>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

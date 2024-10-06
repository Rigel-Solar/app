import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

interface BackButtonProps extends TouchableOpacityProps {
	color?: string;
}

export function BackButton({ color = "#0066D2", ...rest }: BackButtonProps) {
	const navigate = useNavigation();

	return (
		<TouchableOpacity {...rest} onPress={() => navigate.goBack()}>
			<Ionicons name="chevron-back" size={28} color={color} />
		</TouchableOpacity>
	);
}

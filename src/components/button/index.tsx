import { ReactNode } from "react";
import { TouchableOpacityProps } from "react-native";
import { Loading } from "../loading";
import * as C from "./styles";

export type buttonStyle = "primary" | "secondary";
export type buttonState = "normal" | "error" | "success";

interface ButtonProps extends TouchableOpacityProps {
	icon?: ReactNode;
	text?: string;
	buttonStyle?: buttonStyle;
	buttonState?: buttonState;
	isLoading?: boolean;
}

export function Button({
	children,
	icon,
	text,
	buttonStyle = "primary",
	buttonState = "normal",
	isLoading = false,
	...props
}: ButtonProps) {
	return (
		<C.ButtonContainer
			activeOpacity={0.7}
			{...{
				...props,
				$buttonStyle: buttonStyle,
				$buttonState: buttonState,
			}}
		>
			{icon}
			<C.ButtonText
				{...{
					...props,
					$buttonStyle: buttonStyle,
					$buttonState: buttonState,
				}}
			>
				{text}
			</C.ButtonText>
			{isLoading && <Loading />}
		</C.ButtonContainer>
	);
}

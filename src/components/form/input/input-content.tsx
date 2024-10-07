import React from "react";
import { TextInputProps } from "react-native";
import { styled } from "styled-components/native";

interface InputTextProps extends TextInputProps {
	keyboardType?: "numeric";
	placeholderText?: string;
	numberOfLines?: number;
	multiline?: boolean;
	hasSecureTextEntry?: boolean;
	onChange: (...event: any[]) => void;
}

const InputContent = ({
	placeholderText,
	hasSecureTextEntry,
	numberOfLines,
	keyboardType,
	multiline,
	onChange,
	...rest
}: InputTextProps) => {
	return (
		<Input
			onChangeText={onChange}
			placeholder={placeholderText}
			placeholderTextColor="#7A8282"
			secureTextEntry={hasSecureTextEntry}
			keyboardType={keyboardType}
			multiline={multiline}
			numberOfLines={numberOfLines}
			{...rest}
		/>
	);
};

const Input = styled.TextInput`
	border-bottom-width: 1px;
	border-color: ${({ theme }) => theme.colors.grayscale.gray_30};
	color: ${({ theme }) => theme.colors.fake_input.value};
	font-family: ${({ theme }) => theme.font.family.regular};
	font-size: ${({ theme }) => theme.font.size.body.xs}px;
	border-radius: 4px;
	padding: 4px;
`;

export default InputContent;

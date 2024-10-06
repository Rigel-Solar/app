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
			secureTextEntry={hasSecureTextEntry}
			placeholderTextColor="#000"
			keyboardType={keyboardType}
			multiline={multiline}
			numberOfLines={numberOfLines}
			{...rest}
		/>
	);
};

const Input = styled.TextInput`
	border: 1px solid #ccc;
	color: ${(props) => props.theme.color};
	font-family: ${({ theme }) => theme.font.family.regular};
	border-radius: 4px;
	padding: 12px;
	min-width: 29%;
`;

export default InputContent;

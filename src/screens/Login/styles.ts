import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
	flex: 1;
	background-color: ${(props) => props.theme.background};
`;

export const Wrapper = styled.View`
	flex: 1;
	justify-content: space-between;
	padding: 70px 20px 40px 20px;
`;

export const Form = styled.View`
	gap: 16px;
`;

export const Label = styled.Text`
	font-family: ${(props) => props.theme.font.family.regular};
	font-size: ${(props) => props.theme.font.size.body.md}px;
	margin-top: 12px;
	margin-left: 2px;
`;

export const Button = styled.TouchableOpacity`
	border-radius: 4px;
	background-color: ${(props) => props.theme.colors.brand.rigel};
	padding: 16px;
`;

export const ButtonText = styled.Text`
	font-family: ${(props) => props.theme.font.family.medium};
	font-size: ${(props) => props.theme.font.size.body.md}px;
	text-align: center;
	color: white;
`;

export const ViewError = styled.View`
	background-color: #fecaca;
	padding: 20px;
	border-radius: 6px;
`;

export const TextError = styled.Text`
	color: #f87171;
	text-align: center;
	font-family: ${(props) => props.theme.font.family.regular};
`;

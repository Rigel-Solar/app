import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
	flex: 1;
	padding: 30px 10px;
	background-color: ${({ theme }) => theme.colors.brand.background};
`;

export const Form = styled.ScrollView`
	flex: 1;
`;

export const Label = styled.Text`
	color: ${({ theme }) => theme.colors.brand.text};
	font-family: ${(props) => props.theme.font.family.regular};
	font-size: ${(props) => props.theme.font.size.body.sm}px;
	padding-left: 4px;
`;

export const ButtonArea = styled.View`
	flex-direction: row;
	align-items: end;
	justify-content: space-between;
`;

import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
	flex: 1;
	padding: 30px 10px;
	background-color: ${({ theme }) => theme.colors.brand.background};
`;

export const Form = styled.ScrollView`
	flex: 1;
`;

<<<<<<< HEAD
=======
export const Title = styled.Text`
	color: ${({ theme }) => theme.colors.brand.text};
	font-family: ${(props) => props.theme.font.family.medium};
	font-size: ${(props) => props.theme.font.size.body.md}px;
`;

>>>>>>> 25a5588d41bd67d64bd9f9ac6164f4d73af11cbe
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

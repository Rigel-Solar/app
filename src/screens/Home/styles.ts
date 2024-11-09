import styled from "styled-components/native";

export const Container = styled.View`
	flex: 1;
	padding: 20px;
	background-color: ${({ theme }) => theme.colors.brand.background};
`;

export const Header = styled.View`
	margin-bottom: 24px;
`;

export const Main = styled.View`
	flex: 1;
	margin: 24px 0 12px 0;
`;

export const TitleArea = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const Title = styled.Text`
	color: ${({ theme }) => theme.colors.brand.text};
	font-family: ${({ theme }) => theme.font.family.medium};
	font-size: ${({ theme }) => theme.font.size.heading.lg}px;
`;

export const Description = styled.Text`
	font-family: ${({ theme }) => theme.font.family.regular};
	font-size: ${({ theme }) => theme.font.size.body.md}px;
	color: ${({ theme }) => theme.colors.fake_input.label};
`;

export const Button = styled.TouchableOpacity`
	background-color: #0ea5e9;
	padding: 12px;
	border-radius: 6px;
`;

export const ButtonText = styled.Text`
	font-family: ${({ theme }) => theme.font.family.medium};
	color: #fff;
	text-align: center;
`;

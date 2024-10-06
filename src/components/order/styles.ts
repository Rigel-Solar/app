import styled from "styled-components/native";

export const Container = styled.View`
	gap: 20px;
	border-radius: 6px;
	background-color: ${({ theme }) => theme.colors.brand.order};
	shadow-color: #000;
	shadow-offset: 0 100px;
	shadow-opacity: 0.25;
	shadow-radius: 10px;
	elevation: 3;
`;

export const Header = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 20px 20px 0 20px;
`;

export const Description = styled.View`
	gap: 4px;
	padding: 0 20px;
`;

export const Footer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 16px 20px;
	border-top-color: ${({ theme }) => theme.colors.brand.background};
	border-top-width: 1px;
`;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.font.family.medium};
	color: ${({ theme }) => theme.colors.brand.text};
`;

export const Text = styled.Text`
	font-family: ${({ theme }) => theme.font.family.regular};
	color: ${({ theme }) => theme.colors.brand.text};
`;

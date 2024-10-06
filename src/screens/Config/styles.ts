import { verticalScale } from "@/styles/metrics";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
	flex: 1;
	padding: 20px;
	background-color: ${({ theme }) => theme.colors.brand.background};
`;

export const Header = styled.View`
	flex: 1;
	flex-direction: row;
	justify-content: space-between;
`;

export const ButtonMode = styled.TouchableOpacity`
	justify-content: center;
`;

export const Logout = styled.Text`
	font-family: ${({ theme }) => theme.font.family.medium};
	font-size: ${({ theme }) => theme.font.size.body.md}px;
	color: ${({ theme }) => theme.colors.grayscale.gray_60};
`;

export const ProfileArea = styled.View`
	align-items: center;
`;

export const Main = styled.ScrollView`
	flex: 1;
	padding: 24px 0 80px 0;
`;

export const Name = styled.Text`
	font-family: ${({ theme }) => theme.font.family.regular};
	font-size: ${({ theme }) => theme.font.size.heading.md}px;
	color: ${({ theme }) => theme.colors.brand.text};
	margin-top: ${verticalScale(10)}px;
`;

export const Email = styled.Text`
	font-family: ${({ theme }) => theme.font.family.regular};
	font-size: ${({ theme }) => theme.font.size.body.md}px;
	color: ${({ theme }) => theme.colors.grayscale.gray_70};
	margin-top: ${verticalScale(-5)}px;
`;

export const Category = styled.Text`
	font-family: ${({ theme }) => theme.font.family.medium};
	font-size: ${({ theme }) => theme.font.size.heading.xs}px;
	color: ${({ theme }) => theme.colors.brand.rigel};
	margin-top: ${verticalScale(25)}px;
`;

import { verticalScale } from "@/styles/metrics";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
	flex: 1;
	padding: 10px;
	background-color: ${({ theme }) => theme.colors.brand.background};
`;

export const Main = styled.ScrollView`
	flex: 1;
	padding: 0 10px;
`;

export const Row = styled.View`
	flex-direction: row;
	align-items: center;
	gap: ${verticalScale(16)}px;
`;

export const FakeInput = styled.View`
	flex: 1;
	border-bottom-width: 1px;
	border-color: ${({ theme }) => theme.colors.grayscale.gray_30};
	padding: ${verticalScale(10)}px 0;
`;

export const Label = styled.Text`
	font-family: ${({ theme }) => theme.font.family.regular};
	font-size: ${({ theme }) => theme.font.size.body.sm}px;
	color: ${({ theme }) => theme.colors.brand.text};
`;

export const Value = styled.Text`
	font-family: ${({ theme }) => theme.font.family.regular};
	font-size: ${({ theme }) => theme.font.size.body.sm}px;
	color: ${({ theme }) => theme.colors.fake_input.value};
`;

export const ButtonArea = styled.View`
	flex: 1;
	padding-bottom: 30px;
`;

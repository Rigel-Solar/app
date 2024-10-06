import { moderateScale } from "@/styles/metrics";
import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
	flex-direction: row;
	width: 100%;
	gap: ${moderateScale(24)}px;
	padding: ${moderateScale(15)}px 0;
`;

export const Icon = styled.View`
	justify-content: center;
	height: ${moderateScale(32)}px;
	background-color: ${(props) => props.theme.colors.grayscale.gray_20};
	border-radius: ${moderateScale(8)}px;
	padding: 5px;
`;

export const Content = styled.View`
	flex: 1;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const TextContent = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const ItemTitle = styled.Text`
	color: ${({ theme }) => theme.colors.fake_input.label};
	font-family: ${(props) => props.theme.font.family.medium};
	font-size: ${moderateScale(17)}px;
`;

export const ItemSubtitle = styled.Text`
	color: ${(props) => props.theme.colors.fake_input.label};
	font-family: ${(props) => props.theme.font.family.regular};
	font-size: ${moderateScale(13)}px;
`;

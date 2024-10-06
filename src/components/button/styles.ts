import { moderateScale } from "@/styles/metrics";
import styled, { css } from "styled-components/native";
import { buttonState, buttonStyle } from ".";

export interface buttonStyleProps {
	$buttonStyle: buttonStyle;
	$buttonState: buttonState;
	disabled?: boolean;
}

const primary = css`
	background-color: ${(props) => props.theme.colors.brand.rigel};
`;

const secondary = css`
	border: 1px solid ${(props) => props.theme.colors.grayscale.gray_20};
	background-color: transparent;
`;

const styles = {
	primary,
	secondary,
};

const normal = css``;
const error = css<buttonStyleProps>`
	${({ $buttonStyle }) => {
		if ($buttonStyle === "primary") {
			return css`
				color: #fff;
			`;
		}

		return css`
			color: #fff;
		`;
	}}
`;
const success = css<buttonStyleProps>`
	${({ $buttonStyle }) => {
		if ($buttonStyle === "primary") {
			return css`
				background-color: #000;
				color: #fff;
			`;
		}

		return css`
			color: #fff;
		`;
	}}
`;

const stateStyles = {
	normal,
	error,
	success,
};

export const TextStyles = css<buttonStyleProps>`
	padding: 0;
	font-family: ${({ theme }) => theme.font.family.medium};
	color: ${(props) => props.theme.colors.brand.white};
`;

export const ButtonText = styled.Text<buttonStyleProps>`
	${TextStyles}
	margin-top: 3px;
`;

export const ButtonStyles = css<buttonStyleProps>`
	flex: 1;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	border-radius: ${moderateScale(6)}px;
	padding: ${moderateScale(8)}px;
	gap: ${moderateScale(8)}px;
	${({ $buttonStyle }) => styles[$buttonStyle]};
	${({ $buttonState }) => stateStyles[$buttonState]};

	${({ disabled }) => {
		if (disabled) {
			return css`
				opacity: 0.3;
			`;
		}
	}}
`;

export const ButtonContainer = styled.TouchableOpacity<buttonStyleProps>`
	${ButtonStyles}
`;

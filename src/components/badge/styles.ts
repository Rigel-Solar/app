import styled, { css } from "styled-components/native";

export interface BadgeProps {
	$status: "Finalizada" | "Em andamento" | "Negada";
}

export const Badge = styled.Text<BadgeProps>`
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	font-family: ${({ theme }) => theme.font.family.regular};
	font-size: ${({ theme }) => theme.font.size.body.xs}px;
	padding: 2px 8px;
	${({ $status }) => {
		if ($status == "Finalizada") {
			return css`
				background-color: #042f2e;
				color: #2dd4bf;
			`;
		}
		if ($status == "Em andamento") {
			return css`
				background-color: #422006;
				color: #facc15;
			`;
		} else {
			return css`
				background-color: #450a0a;
				color: #f87171;
			`;
		}
	}}
`;

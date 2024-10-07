import styled from "styled-components/native";

interface formContainerProps {
	columns?: number;
	$columnSize?: string;
}

export const FormFieldsContainer = styled.View<formContainerProps>`
	flex: 1;
	display: grid;
	grid-template-columns: repeat(
		${({ columns }) => columns || 2},
		${(props) => props.$columnSize || "1fr"}
	);
	gap: 6px;
`;

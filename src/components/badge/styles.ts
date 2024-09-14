import styled, { css } from 'styled-components/native';

export interface BadgeProps {
	$status: 'Finalizada' | 'Em andamento' | 'Negada';
}

export const Badge = styled.Text<BadgeProps>`
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 2px 4px;
	${({ $status }) => {
		if ($status == 'Finalizada') {
			return css`
				background-color: #042F2E;
        color: #2DD4BF;
			`;
		}
    if ($status == 'Em andamento') {
			return css`
				background-color: #422006;
        color: #FACC15;
			`;
		}
    else {
      return css`
				background-color: #450A0A;
        color: #F87171;
			`;
    }
	}}
`;

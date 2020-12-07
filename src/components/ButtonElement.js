import styled from 'styled-components';
import { Colors } from '../styles/color';
import { Fonts } from '../styles/fonts';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
	border-radius: 50px;
	background: ${({ primary }) => (primary ? Colors.ButtonDark : Colors.Button)};
	white-space: nowrap;
	padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
	color: ${({ dark }) => (dark ? Colors.H1 : '#fff')} !important;
	outline: none;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	aligns-terms: center;
	transition: all 0.2s ease-int-out;
	font-family: ${Fonts.Primary};
	font-weight: bold;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: ${({ primary }) => (primary ? Colors.ButtonLight : '#fff')};
	}
`;

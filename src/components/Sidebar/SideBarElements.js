import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';
import { Colors } from '../../styles/color';
import { Fonts } from '../../styles/fonts';

export const SidebarContainer = styled.aside`
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 100%;
	background-image: ${Colors.Second};
	display: grid;
	align-items: center;
	top: 0;
	padding: 100px;
	transition: 0.3s ease-in-out;
	opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
	top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

	
`;

export const CloseIcon = styled(FaTimes)`
	color: #fbfbff;
	animation: spin 3s linear infinite;
	@keyframes spin {
		from {
			transform: rotate(360deg);
		}
		to {
			transform: rotate(0deg);
		}
	}
`;

export const Icon = styled.div`
	position: absolute;
	background: transparent;
	top: 1.2rem;
	right: 2rem;
	font-size: 2rem;
	cursor: pointer;
	outline: none;
`;

export const SidebarWrapper = styled.div`
	color: #6ad5cb;
`;

export const SidebarLinks = styled(LinkScroll)`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 2.5rem;

	text-decoration: none;
	list-style: none;
	transition: 0.2s ease-in-out;
	color: #6ad5cb;
	cursor: pointer;
	font-family: ${Fonts.Primary};
	flex-grow: 1;

	&:hover,
	&:active {
		color: #00487c;
		text-decoration: none;
		font-weight: 900;
		transition: 0.3s ease-in-out;
		list-style: none;
	}
`;

export const SidebarMenu = styled.ul`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(6, 100px);
	text-align: center;

	@media screen and (max-width: 480px) {
		grid-template-rows: repeat(6, 100px);
	}
`;

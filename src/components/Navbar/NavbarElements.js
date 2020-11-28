import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { Colors } from '../../styles/color';
import { Fonts } from '../../styles/fonts';

export const Nav = styled.nav`
	background-image: ${Colors.Primary};
	height: 80px;
	display: flex;
    justify-content:space-between;
    align-items:baseline;
    font-size:1rem;
    position:sticky;
    top:0;
    z-index:10;

@media screen and (max-width:960px){
    transition:0.8s all ease:
}
`;

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	//align-items: stretch;
	z-index: 1;
	width: 100%;
	padding: 0px 20px;

	@media screen and (max-width: 768px) {
		justify-content: space-between;
		align-items: center;
	}
`;

export const NavLogo = styled(LinkScroll)`
	color: #fbfbff;
	justify-self: flex-start;
	cursor: pointer;
	font-size: 2rem;
	display: flex;
	align-items: center;

	font-family: ${Fonts.Primary};
	text-decoration: none;
`;

export const MobileIcon = styled.div`
	display: none;
	@media screen and (max-width: 768px) {
		display: block;

		top: 1;

		transform: translate (-100%, 60%);
		font-size: 2rem;
		cursor: pointer;
		color: #fbfbff;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	justify-content: flex-end;

	margin-bottom: 0;
	final @media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavItem = styled.li`
	height: 30px;
	color: #fbfbff;
	font-family: ${Fonts.Primary};

	&, &:before, &:after {
  box-sizing: border-box;
}
	@media screen and (max-width: 768px) {
		display: none;
	
`;

export const NavLinks = styled(LinkScroll)`
	color: #fbfbff;
	height: 100%;
	cursor: pointer;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	font-size: 1.7rem;
	font-weight: bold;

	&:hover {
		color: #b5fed9;
		font-weight: 900;
		transition: 0.1s ease-in-out;
		text-decoration: none;
	}
`;

export const NavImageNav = styled.nav`
	display: flex;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavImageNav2 = styled.nav`
	display: flex;
`;

export const NavImage = styled.img`
	width: 90px;
	height: 90px;
	animation: spin 6s linear infinite;
	@keyframes spin {
		from {
			transform: rotate(360deg);
		}
		to {
			transform: rotate(0deg);
		}
	}
`;

import styled from 'styled-components';
import { Colors } from '../../styles/color';
import { Fonts } from '../../styles/fonts';

export const SectionContainer = styled.div`
	height: 800px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-image: ${Colors.Primary};
	@media screen and (max-width: 1000px) {
		height: 1000px;
		margin-top: 15%;
		padding: 100px 0;
	}

	@media screen and (max-width: 768px) {
		margin-top: 100%;
		padding: 100px 0;
	}
	@media screen and (max-width: 480px) {
		height: auto;
		margin-top: 160%;
	}
`;

export const ProjectWrapper = styled.div`
	max-width: 1000px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	margin: 0 auto;
	align-items: center;
	grid-gap: 4%;

	@media screen and (max-width: 1000px) {
		grid-template-columns: 1fr;
	}
	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		padding: 0;
	}
`;

export const ProjectCard = styled.div`
	background-image: ${Colors.Third};
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	border-radius: 20px;
	height: 250px;
	padding: 20px 20px;
	transition: all 0.4s ease-in-out;
	&:hover {
		transform: scale(1.02);
		transition: all 0.4s ease-in-out;
		cursor: pointer;
	}
`;

export const ProjectIcon = styled.img`
	height: 100px;
	width: 100px;
	margin-bottom: 10px;
`;

export const ProjectH1 = styled.h1`
	color: #fff;
	font-size: 2.5rem;
	margin-bottom: 60px;
	font-family: ${Fonts.Primary};
	font-weight: 900;
	@media screen and (max-width: 480px) {
		font-size: 2rem;
	}
`;

export const ProjectH2 = styled.h2`
	background: -webkit-linear-gradient(#eee, ${Colors.CardTitle});
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-size: 2rem;
	margin-bottom: 20px;
	font-weight: 500;
`;

export const ProjectP = styled.p`
	font-size: 1rem;
	text-align: center;
	color: #fff;
	font-weight: 300;
	font-family: ${Fonts.Primary};
`;

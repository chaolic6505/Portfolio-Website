import styled from 'styled-components';
import { Colors } from '../../styles/color';
import { Fonts } from '../../styles/fonts';

export const ServicesContainer = styled.div`
	height: 40rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-image: ${Colors.Primary};
	@media screen and (max-width: 1000px) {
		height: 2100px;
	}
	@media screen and (max-width: 768px) {
		height: 1300px;
	}
	@media screen and (max-width: 480px) {
		height: 1500px;
		margin-top: 0%;
	}
`;

export const ServicesWrapper = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	display: grid;
	align-items: center;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 1%;
	padding: 0 auto;

	@media screen and (max-width: 1000px) {
		heigh: 1000px;
		grid-template-columns: 1fr;
		padding: 0 20px;
	}
	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		padding: 0 20px;
	}
`;

export const ServicesCard = styled.div`
max-width:390px;
min-height:450px;
	display: flex;
    justify-content:flex-start;
	flex-direction: column;
	align-items: center;
	border-radius: 10px;
	background-image: ${Colors.Third};
	padding: 30px;
	border-shadow:0 1px 3px rgba(0,0,0,2)
	transition: all 0.4s ease-in-out;
	

	&:hover{
		transform:scale(1.02);
		transition:all 0.4s ease-in-out;
		cursor:pointer;
	}


`;

export const ServicesIcon = styled.img`
	height: 250px;
	width: 250px;
	margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
	color: #fff;
	font-size: 2.5rem;
	margin-bottom: 60px;
	font-family: ${Fonts.Primary};
	font-weight: 900;
	@media screen and (max-width: 480px) {
		font-size: 2rem;
	}
`;

export const ServicesH2 = styled.h2`
	background: -webkit-linear-gradient(#eee, ${Colors.CardTitle});
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-size: 1.5rem;
	margin-bottom: 10px;
`;

export const ServicesP = styled.p`
	color: #fff;
	font-size: 1rem;
	text-align: center;
	font-family: ${Fonts.Second};
`;

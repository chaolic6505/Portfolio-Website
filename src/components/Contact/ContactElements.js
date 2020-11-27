import styled from 'styled-components';
import { Colors } from '../../styles/color';
import { Fonts } from '../../styles/fonts';

export const InfoH1 = styled.h1`
	color: #fff;
	font-size: 2.5rem;
	font-family: ${Fonts.Primary};
font-weight: 900;
	@media screen and (max-width: 480px) {
		font-size: 2rem;
	}
`;

export const InfoContainer = styled.div`
	height: 60rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-image: ${({ lightBg }) => (lightBg ? Colors.Primary : '#f9f9f9')};
	margin-top: 20%;
	@media screen and (max-width: 768px) {
		padding: 100px 0;
	}
	@media screen and (max-width: 480px) {
		margin-top: 0%;
	}
`;

export const InfoWrapper = styled.div`
	display: grid;
	z-index: 1;
	height: 600px;
	width: 100%;
	max-width: 1100px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 24px;
	justify-content: center;
`;

export const InfoRow = styled.div`
	display: grid;
	align-items: flex-end;
	grid-auto-columns: minmax(auto, 1fr);
	grid-template-areas: ${({ imgStart }) =>
		imgStart ? `'col1 col2'` : `'col2 col1'`};

	@media screen and (max-width: 768px) {
		grid-template-areas: ${({ imgStart }) =>
			imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2' `};
	}
`;

export const Column1 = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col1;
`;

export const Column2 = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col2;
`;

export const TextWrapper = styled.div`
	max-width: 540px;
	padding-top: 0;
	padding-bottom: 60px;
`;

export const TopLine = styled.p`
	color: ${Colors.H2};
	font-size: 30px;
	line-height: 16px;
	font-weight: 700;
	letter-spacing: 1px;
	margin-bottom: 40px;
	font-family: ${Fonts.Third};
`;

export const Heading = styled.h1`
	margin-bottom: 5%;
	font-size: 45px;
	line-height: 1.1;
	font-weight: 600;
	font-family: ${Fonts.Second};
	color: ${({ lightText }) => (lightText ? '#f9f9f9' : Colors.H2)};
	@media screen and (max-width: 480px) {
		font-size: 30px;
	}
`;

export const Subtitle = styled.p`
	margin-bottom: 50px;
	max-width: 440px;
	font-size: 18px;
	line-height: 24px;
	font-weight: 600;
	font-family: ${Fonts.Second};
	color: ${({ darkText }) => (darkText ? '#f9f9f9' : Colors.H1)};
`;

export const BtnWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
`;

export const ImgWrapper = styled.div`
	max-width: 555px;
	height: 100%;
`;

export const Img = styled.img`
	width: 100%;
	margin: 0 0 10px 0;
	padding-right: 0;
`;

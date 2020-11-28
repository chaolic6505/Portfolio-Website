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
	height: 900px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-image: ${({ lightBg }) => (lightBg ? Colors.Primary : '#f9f9f9')};

	@media screen and (max-width: 768px) {
		padding: 100px 0;
	}
	@media screen and (max-width: 480px) {
		height: auto;
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

	@media screen and (max-width: 480px) {
		padding-bottom: 1%;
		max-height: 400px;
		margin-top: 0%;
	}
`;

export const InfoRow = styled.div`
	display: grid;
	align-items: flex-start;
	grid-auto-columns: minmax(auto, 1fr);
	grid-template-areas: ${({ imgStart }) =>
		imgStart ? `'col1 col2'` : `'col2 col1'`};

	@media screen and (max-width: 768px) {
		grid-template-areas: ${({ imgStart }) =>
			imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2' `};
	}
`;

export const Column1 = styled.div`
	min-height: 700px;
	display: flex;
	justify-content: center;
	padding: 0 15px;
	grid-area: col1;

	@media screen and (max-width: 480px) {
		padding-bottom: 1%;
		max-height: 600px;
		margin-top: 0%;
	}
`;

export const Column2 = styled.div`
	min-height: 700px;
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col2;
`;

export const TextWrapper = styled.div`
	align-items: center;
	text-align: center;
	max-width: 540px;
	padding-top: 0;
	padding-bottom: 10%;

	@media screen and (max-width: 480px) {
		max-height: 500px;
		padding-bottom: 0%;
		margin-top: 0%;
	}
`;

export const TopLine = styled.p`
	color: ${Colors.H2};
	font-size: 40px;
	font-weight: 700;
	letter-spacing: 1px;
	margin-bottom: 5%;
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

export const SubtitleDiv = styled.div`
	display: flex;
	justify-content: center;
`;
export const Subtitle = styled.p`
	margin-bottom: 10%;
	text-align: center;
	max-width: 440px;
	font-size: 18px;
	line-height: 30px;
	font-weight: 600;
	font-family: ${Fonts.Second};
	color: ${({ darkText }) => (darkText ? '#f9f9f9' : Colors.H1)};
`;

export const BtnWrapper = styled.div`
	margin-top: 6%;
	display: flex;
	justify-content: center;
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

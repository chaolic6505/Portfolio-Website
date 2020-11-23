import styled from 'styled-components';
import { Colors } from '../../styles/color';
import { Fonts } from '../../styles/fonts';

export const InfoContainer = styled.div`
	background-image: ${({ lightBg }) => (lightBg ? Colors.Primary : '#f9f9f9')};

	@media screen and (max-width: 768px) {
		padding: 100px 0;
	}
`;

export const InfoWrapper = styled.div`
	display: grid;
	z-index: 1;
	height: 900px;
	width: 100%;
	max-width: 1100px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 24px;
	justify-content: center;
`;

export const InfoRow = styled.div`
	display: grid;
	grid-auto-columns: minmax(auto, 1fr);
	grid-templates-areas: ${({ imgStart }) =>
	imgStart ? `'col2 col1'` : `'col1 col2'`}
	align-items: center;


	@media screen and (max-width: 768px) {
		grid-templates-areas: ${({ imgStart }) =>
	imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2' `}
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
	font-size: 16px;
	line-height: 16px;
	font-weight: 700;
	letter-spacing: 1px;
	text-transform: uppercase;
	margin-bottom: 16px;
	font-family: ${Fonts.Third};
`;

export const Heading = styled.h1`
	margin-bottom: 24px;
	font-size: 45px;
	line-height: 1.1;
	font-weight: 600;
	font-family: ${Fonts.Second};

	background: -webkit-linear-gradient(#eee, ${Colors.H1});
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	margin-bottom: 10%;
	word-spacing: 10px;
	letter-spacing: 10px;

	@media screen and (max-width: 480px) {
		font-size: 30px;
	}
`;

export const Subtitle = styled.p`
	margin-bottom: 30px;
	max-width: 440px;
	font-size: 18px;
	line-height: 24px;
	font-weight: 600;
	font-family: ${Fonts.Second};

	background: -webkit-linear-gradient(#eee, ${Colors.H2});
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
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

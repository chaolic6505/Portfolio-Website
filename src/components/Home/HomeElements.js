import styled from 'styled-components';
import { Colors } from '../../styles/color';
import { Fonts } from '../../styles/fonts';

export const InfoContainer = styled.div`
	background-image: ${Colors.Primary};
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0px 0px;
	position: relative;
	z-index: 100;
`;

export const InfoBg = styled.div`
    display: flex;
    position:absolute;
	justify-content: center;
    top:0;
    right:0;
    bottom:0;
    left:0;
    width:100%;
    height:100%
    overflow:hidden;
	z-index: -1;
	

`;

export const VideoBg = styled.video`
	width: 100%;
	height: 100%;
	// background-image: ${Colors.Primary};
	background-color: black;
`;

export const InfoContent = styled.div`
	z-index: 1;
	min-height: 350px;
	min-width: 650px;
	align-items: center;
	position: relative;
	display: flex;
	padding: 0px 0px;
	flex-direction: column;
	align-self: flex-self;
	margin-top: 20%;
	margin-bottom: 15%;
	@media screen and (max-width: 768px) {
		min-width: 480px;
		margin-top: 5%;
		word-spacing: 5px;
		letter-spacing: 5px;
		font-size: 20px;
	}
	@media screen and (max-width: 500px) {
		margin-top: 5%;
		word-spacing: 5px;
		letter-spacing: 5px;
		font-size: 20px;
	}
`;

export const ContentH1 = styled.h1`
	color: white;
	font-size: 45px;
	text-align: center;
	font-family: ${Fonts.Second};
	margin-bottom: 8%;
	word-spacing: 5px;
	letter-spacing: 10px;

	@media screen and (max-width: 768px) {
		font-size: 30px;
		margin-bottom: 10%;
		word-spacing: 5px;
		letter-spacing: 5px;
	}
	@media screen and (max-width: 480px) {
		margin-bottom: 20px;
		word-spacing: 5px;
		letter-spacing: 1px;
		letter-spacing: 5px;
		font-size: 20px;
	}
`;
export const ContentH2 = styled.h2`
	color: white;
	font-size: 40px;
	text-align: center;
	font-family: ${Fonts.Third};
	min-height: 50px;
	word-spacing: 20px;
	letter-spacing: 10px;
	background: -webkit-linear-gradient(#eee, ${Colors.H2});
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	margin-bottom: 8%;

	@media screen and (max-width: 768px) {
		font-size: 20px;
		margin-bottom: 0px;
	}
	@media screen and (max-width: 480px) {
		margin-bottom: 0px;
		max-height: 25px;
		font-size: 12px;
		word-spacing: 5px;
		letter-spacing: 5px;
	}
`;

export const IconContainer = styled.div`
	min-height: 150px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	padding: 0 30%;

	@media screen and (max-width: 768px) {
		justify-content: space-between;
	}
	@media screen and (max-width: 480px) {
		justify-content: space-between;
	}
`;

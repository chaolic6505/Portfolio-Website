
import styled from 'styled-components';
import { Colors } from '../../styles/color';
import { Fonts } from '../../styles/fonts';
import { FaFacebookSquare,FaGithubSquare,FaLinkedinIn } from 'react-icons/fa';


export const InfoContainer = styled.div`
	background-image: ${Colors.Primary};
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0px 30px;
	position: relative;
	z-index: 100;

	
`;

export const InfoBg = styled.div`
    position:absolute;
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
	width:100%;
    height:100%
    -o-object-fit:cover;
    background-image: ${Colors.Primary};


	
`;


export const InfoContent = styled.div`
    z-index: 1;
	max-width: 1200px;
	min-width: 1000px;

    position:relative;
	display: flex;
	padding: 0px 24px;
	flex-direction:column;
	align-self:flex-self;
	margin-top:15%;
	

		
		@media screen and (max-width: 480px) {
				margin-top:5%;
			word-spacing:5px;
        letter-spacing:5px;
		  font-size:20px;
	}
	
`;

export const ContentH1=styled.h1`
  color:white;
  font-size:45px;
  text-align:center;
  font-family:${Fonts.Second};
background: -webkit-linear-gradient(#eee, ${Colors.H1});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom:10%;
word-spacing:10px;
  letter-spacing:10px;
	
	@media screen and (max-width: 768px) {
		  font-size:30px;
		  margin-bottom:10%;
		  word-spacing:5px;
  letter-spacing:5px;
	}
		@media screen and (max-width: 480px) {
			 margin-bottom:20px;
			word-spacing:5px;
			letter-spacing:1px;
        letter-spacing:5px;
		  font-size:20px;
	}
`;
export const ContentH2=styled.h2`
  color:white;
  font-size:40px;
  text-align:center;
  font-family:${Fonts.Third};
min-height:50px;
  word-spacing:20px;
  letter-spacing:10px;
background: -webkit-linear-gradient(#eee, ${Colors.H2});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  

	@media screen and (max-width: 768px) {
		  font-size:20px;
		  margin-bottom:0px;
	}
		@media screen and (max-width: 480px) {
			
			min-height:50px;
		  font-size:12px;
		  word-spacing:5px;
  letter-spacing:5px;
	}
`;

export const SociaIconGit = styled(FaGithubSquare)`
	color: #F1E9DA;
	height:40px;
	width:40px;
	
	&:hover{
		color:#7CFEF0;
		 height:45px;
	width:45px;
	}
	@media screen and (max-width: 768px) {
		 height:30px;
	width:30px;
	}
		@media screen and (max-width: 480px) {
			height:20px;
	width:20px;
	}
`;
export const SociaIconFB = styled(FaFacebookSquare)`
	color: #F1E9DA;
	height:40px;
	width:40px;
	&:hover{
		color:#7CFEF0;
		 height:45px;
	width:45px;
	}
	@media screen and (max-width: 768px) {
		 height:30px;
	width:30px;
	}
		@media screen and (max-width: 480px) {
			height:20px;
	width:20px;
	}
`;
export const SociaIconLink = styled(FaLinkedinIn)`
	color: #F1E9DA;
	height:40px;
	width:40px;
		&:hover{
		color:#7CFEF0;
		 height:45px;
	width:45px;
	}
	@media screen and (max-width: 768px) {
		 height:30px;
	width:30px;
	}
		@media screen and (max-width: 480px) {
			height:20px;
	width:20px;
	}
`;

export const IconLink= styled.a`
	
	
`;





export const IconContainer = styled.div`
    min-height:150px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	position: relative;
	padding:0 30%;

	
	@media screen and (max-width: 768px) {
		 justify-content: space-evenly;
	}
		@media screen and (max-width: 480px) {
			
			 justify-content: space-evenly;
	}

	
`;
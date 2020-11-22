import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../styles/color';
import { Fonts } from '../../styles/fonts';


export const InfoContainer = styled.div`
	background-image: ${Colors.Primary};
	display: flex;
	justify-content: center;
	align-items: center;
	height:800px;
	padding: 0px 30px;
	position: relative;
	z-index: 1;

	
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
position:fixed;
	display: flex;
	padding: 0px 24px;
	flex-direction:column;
	align-self:flex-self;
	margin-top:-250px;

		@media screen and (max-width: 768px) {
			margin-top:-350px;
			  
	}
`;

export const ContentH1=styled.h1`
  color:white;
  font-size:65px;
  text-align:center;
  font-family:${Fonts.Second};
background: -webkit-linear-gradient(#eee, ${Colors.H1});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom:70px;

	
	@media screen and (max-width: 768px) {
		  font-size:40px;
		  margin-bottom:40px;
	}
		@media screen and (max-width: 480px) {
		  font-size:32px;
	}
`;
export const ContentH2=styled.h2`
  color:white;
  font-size:40px;
  text-align:center;
  font-family:${Fonts.Third};
background: -webkit-linear-gradient(#eee, ${Colors.H2});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
   margin-bottom:50px;

  //font-weight:700;

	
	@media screen and (max-width: 768px) {
		  font-size:30px;
	}
		@media screen and (max-width: 480px) {
		  font-size:22px;
	}
`;
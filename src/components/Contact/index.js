import React from 'react';
import { Button } from 'react-scroll';
import {
	InfoContainer,
	InfoWrapper,
	InfoRow,
	Column1,
	Column2,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
	BtnWrapper,
	ImgWrapper,
	Img,
} from './ContactElements';

const Contact = () => {
	return (
		<InfoContainer>
			<InfoWrapper>
				<InfoRow>
					<Column1>
						<TextWrapper>
							<TopLine>Topline</TopLine>
							<Heading></Heading>
							<Subtitle></Subtitle>
							<BtnWrapper>
								<Button to="home">Button</Button>
							</BtnWrapper>
						</TextWrapper>
					</Column1>
					<Column2>
						<ImgWrapper>
							<Img />
						</ImgWrapper>
					</Column2>
				</InfoRow>
			</InfoWrapper>
		</InfoContainer>
	);
};

export default Contact;

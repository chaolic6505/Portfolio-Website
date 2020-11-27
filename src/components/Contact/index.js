import React from 'react';
import { EMAIL } from '../email';
import { Button } from '../ButtonElement';
import VANJPG from '../../images/van.jpg';
import { SkillBar } from '../common/SkillBar';
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
	InfoH1,
} from './ContactElements';

const Contact = ({
	headline,
	lightBg,
	imgStart,
	topLine,
	lightText,
	darkText,
	buttonLabel,
	img,
	alt,
	dark,
	id,
	description,
	primary,
}) => {
	return (
		<>
			<InfoContainer lightBg={lightBg} id={id}>
				<InfoH1>About</InfoH1>
				<InfoWrapper>
					<InfoRow imgStart={imgStart}>
						<Column1>
							<TextWrapper>
								<TopLine>{topLine}</TopLine>
								<Heading lightText={lightText}>{headline}</Heading>
								<Subtitle darkText={darkText}>{description}</Subtitle>
								<BtnWrapper>
									<Button
										onClick={() => {
											window.location.href = 'mailto:chaolic6505@gmail.com';
										}}
										primary={primary ? 1 : 0}
										dark={dark}
										to="home"
										smooth={true}
										duration={500}
										spy={true}
										exact="true"
										offset={-80}
									>Let's chat</Button>
								</BtnWrapper>
							</TextWrapper>
						</Column1>
						<Column2>
							<ImgWrapper>
								<SkillBar />
							</ImgWrapper>
						</Column2>
					</InfoRow>
				</InfoWrapper>
			</InfoContainer>
		</>
	);
};

export default Contact;

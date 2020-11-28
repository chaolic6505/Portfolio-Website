import React from 'react';
import { Button } from '../ButtonElement';
import { SkillBar } from '../common/SkillBar';
import Fade from 'react-reveal/Fade';
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
	SubtitleDiv,
	BtnWrapper,
	ImgWrapper,
	InfoH1,
} from './AboutElements';

const About = ({
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
						<Fade left>
							<Column1>
								<TextWrapper>
									<TopLine>{topLine}</TopLine>
									<Heading lightText={lightText}>{headline}</Heading>
									<SubtitleDiv>
										<Subtitle darkText={darkText}>{description}</Subtitle>
									</SubtitleDiv>
									<BtnWrapper>
										<Button
											onClick={() => {
												window.location.href = 'mailto:chaolic6505@gmail.com';
											}}
											primary={primary ? 1 : 0}
											dark={dark}
											to="home"
											smooth={true}
											duration={1500}
											delay={1000}
											spy={true}
											exact="true"
										>
											Let's chat
										</Button>
									</BtnWrapper>
								</TextWrapper>
							</Column1>
						</Fade>
						<Fade right delay={500}>
							<Column2>
								<ImgWrapper>
									<SkillBar />
								</ImgWrapper>
							</Column2>
						</Fade>
					</InfoRow>
				</InfoWrapper>
			</InfoContainer>
		</>
	);
};

export default About;

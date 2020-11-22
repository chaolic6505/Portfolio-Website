import React from 'react';
import Video from '../../videos/bgvideo.mp4';
import Typing from 'react-typing-animation';
import RubberBand from 'react-reveal/RubberBand';
import {
	InfoContainer,
	InfoBg,
	VideoBg,
	InfoContent,
	ContentH1,
	ContentH2
} from './MainInfoElements';
const InfoSection = () => {
	return (
		<InfoContainer>
			<InfoBg>
				<VideoBg autoPlay loop muted src={Video} type="video/mp4" />
			</InfoBg>
			
			<InfoContent>
		
				  <Typing >
	<ContentH1>Hi, I am Steven Chen</ContentH1>
      	  <Typing.Delay ms={2500} />
  </Typing>
  	<Typing loop={true} speed={50} delay={10}>
	  <Typing.Delay ms={2300} />
					<ContentH2>Full Stack Developer</ContentH2>
					<ContentH2>UX/UI Designer</ContentH2>
					<Typing.Backspace count={35} />
				</Typing>
			</InfoContent>
		</InfoContainer>
	);
};

export default InfoSection;

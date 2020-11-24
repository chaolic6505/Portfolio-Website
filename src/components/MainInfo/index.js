import React from 'react';
import Video from '../../videos/bgvideo.mp4';
import Typing from 'react-typing-animation';
import Typed from 'react-typed';
import RubberBand from 'react-reveal/RubberBand';
import { AnimatedIcon } from '../common/AnimatedIcon';
//import { Link } from 'react-router-dom';
import {
	InfoContainer,
	InfoBg,
	VideoBg,
	InfoContent,
	ContentH1,
	ContentH2,
	SociaIconGit,
	SociaIconFB,
	SociaIconLink,
	IconContainer,
	IconLink,
	IconDiv,
} from './MainInfoElements';
const InfoSection = () => {
	return (
		<InfoContainer>
			<InfoBg>
				<VideoBg playbackRate={0.75} autoPlay loop muted src={Video} type="video/mp4" />
			</InfoBg>

			<InfoContent>
				<ContentH1>
					<Typed  strings={['Hi, I am Steven Chen']} startDelay={1500} typeSpeed={100} />
				</ContentH1>
				<ContentH2>
					<Typed
						strings={['Full Stack Developer', 'UX/UI Designer']}
						typeSpeed={100}
						backDelay={200}
						backSpeed={30}
						startDelay={3500}
						showCursor={false}
						loop
					/>
				</ContentH2>

				<IconContainer>
					<AnimatedIcon />
				</IconContainer>
			</InfoContent>
		</InfoContainer>
	);
};

export default InfoSection;

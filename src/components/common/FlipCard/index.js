import './Card.css';
import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import P1 from '../../../images/p1.png';
import {
	ProjectCard,
	ProjectIcon,
	ProjectH2,
	ProjectP,
} from '../../Project/ProjectSectionElements';
export const Card = ({ PS, H2, DES }) => {
	return (
		<Flippy flipOnHover={true} flipDirection="horizontal">
			<FrontSide style={{ padding: '0px', borderRadius: '20px' }}>
				<ProjectCard>
					<ProjectIcon src={PS} />
					<ProjectH2>{H2}</ProjectH2>
					<ProjectP>{DES}</ProjectP>
				</ProjectCard>
			</FrontSide>
			<BackSide style={{ padding: '0px', borderRadius: '20px' }}>
				<img className="image" src={P1} alt="" />
			</BackSide>
		</Flippy>
	);
};

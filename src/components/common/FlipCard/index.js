import './Card.css';
import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Carousel } from 'react-bootstrap';

import {
	ProjectCard,
	ProjectIcon,
	ProjectH2,
	ProjectP,
} from '../../Project/ProjectSectionElements';
export const Card = ({ PS, H2, DES, Photo }) => {

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
				<Carousel>
					{Photo.map((o, i) => {
			
						return (
							<Carousel.Item>
								<img key={i} className="image" src={o} alt="" />
							</Carousel.Item>
						);
					})}
					
				</Carousel>
			</BackSide>
		</Flippy>
	);
};

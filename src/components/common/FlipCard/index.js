import './Card.css';
import React from 'react';
import P1 from '../../../images/p1.png';
import {
	SectionContainer,
	ProjectH1,
	ProjectWrapper,
	ProjectCard,
	ProjectIcon,
	ProjectH2,
	ProjectP,
} from '../../Project/ProjectSectionElements';
export const Card = ({ PS, H2, DES }) => {
	return (
		<div className="card">
			<div className="front">
				<ProjectCard>
					<ProjectIcon src={PS} />
					<ProjectH2>{H2}</ProjectH2>
					<ProjectP>
						{DES}
					</ProjectP>
				</ProjectCard>
			</div>
			<div className="back">
				<img className="image" src={P1} alt="" />
				<p></p>
			</div>
		</div>
	);
};

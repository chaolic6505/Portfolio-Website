import React from 'react';
import Fade from 'react-reveal/Fade';
import { cardOBJ } from './Data';
import {
	SectionContainer,
	ProjectH1,
	ProjectWrapper,
} from './ProjectSectionElements';
import { Card } from '../common/FlipCard';

const Project = () => {
	return (
		<SectionContainer id="project">
			<ProjectH1>Projects</ProjectH1>
			<ProjectWrapper>
				{cardOBJ.map((o, i) => {
					return (
						<Fade bottom>
							<Card key={i} PS={o.PS} H2={o.H2} DES={o.DES} Photo={o.Photo} />
						</Fade>
					);
				})}
			</ProjectWrapper>
		</SectionContainer>
	);
};

export default Project;

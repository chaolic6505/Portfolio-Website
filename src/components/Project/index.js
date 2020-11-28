import React from 'react';
import Fade from 'react-reveal/Fade';
import {
	SectionContainer,
	ProjectH1,
	ProjectWrapper,
	ProjectCard,
	ProjectIcon,
	ProjectH2,
	ProjectP,
} from './ProjectSectionElements';
import { Card } from '../common/FlipCard';
import REACTP from '../../images/react.svg';
import PYTHON from '../../images/python.png';
import NODEJS from '../../images/nodejs.svg';
import CSS from '../../images/css.png';

const Project = () => {
	return (
		<SectionContainer id="project">
			<ProjectH1>Projects</ProjectH1>
			<ProjectWrapper>
				<Fade right>
					<Card
						PS={REACTP}
						H2={'REACT'}
						DES={
							"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
						}
					/>
				</Fade>
				<Fade left>
					<Card
						PS={PYTHON}
						H2={'Python'}
						DES={
							"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
						}
					/>
				</Fade>
				<Fade left>
					<Card
						PS={NODEJS}
						H2={'Node JS'}
						DES={
							"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
						}
					/>
				</Fade>
				<Fade right>
					<Card
						PS={CSS}
						H2={'CSS'}
						DES={
							"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
						}
					/>
				</Fade>
				{/* <ProjectCard>
					<ProjectIcon src={PYTHON} />
					<ProjectH2>Python</ProjectH2>
					<ProjectP>
						Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
					</ProjectP>
				</ProjectCard>
				<ProjectCard>
					<ProjectIcon src={NODEJS} />
					<ProjectH2>Node JS</ProjectH2>
					<ProjectP>
						Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
					</ProjectP>
				</ProjectCard>
				<ProjectCard>
					<ProjectIcon src={CSS} />
					<ProjectH2>CSS</ProjectH2>
					<ProjectP>
						Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
					</ProjectP>
				</ProjectCard> */}
			</ProjectWrapper>
		</SectionContainer>
	);
};

export default Project;

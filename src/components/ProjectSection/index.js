import React from 'react';
import {
	SectionContainer,
	ProjectH1,
	ProjectWrapper,
	ProjectCard,
	ProjectIcon,
	ProjectH2,
	ProjectP,
} from './ProjectSectionElements';
import REACTP from '../../images/react.svg';
import PYTHON from '../../images/python.png';
import NODEJS from '../../images/nodejs.svg';
import CSS from '../../images/css.png';

const ProjectSection = () => {
	return (
		<SectionContainer>
			<ProjectH1>Projects</ProjectH1>
			<ProjectWrapper>
				<ProjectCard>
					<ProjectIcon src={REACTP} />
					<ProjectH2>React</ProjectH2>
					<ProjectP>
						Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
					</ProjectP>
				</ProjectCard>
				<ProjectCard>
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
				</ProjectCard>
			</ProjectWrapper>
		</SectionContainer>
	);
};

export default ProjectSection;

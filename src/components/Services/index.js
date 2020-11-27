import React from 'react';
import REACTP from '../../images/react.svg';
import RN from '../../images/RN.png';
import AF from '../../images/AF.png';
import {
	ServicesContainer,
	ServicesH1,
	ServicesWrapper,
	ServicesCard,
	ServicesIcon,
	ServicesH2,
	ServicesP,
} from './serviceElements';
const Services = () => {
	return (
		<ServicesContainer id="services">
			<ServicesH1>My Services</ServicesH1>
			<ServicesWrapper>
				<ServicesCard>
					<ServicesIcon src={REACTP} />
					<ServicesH2>Web Development</ServicesH2>
					<ServicesP>
						Both Front & Back End Development, building complex user interfaces with high
						level UX
					</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={AF} />
					<ServicesH2>UX/UI</ServicesH2>
					<ServicesP>
						Designing the user interface, page layouts , logo, identity design and branding
					</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={RN} />
					<ServicesH2>Mobile Application</ServicesH2>
					<ServicesP>
						Developing native (iOS) and cross-platform mobile apps with React Native
					</ServicesP>
				</ServicesCard>
			</ServicesWrapper>
		</ServicesContainer>
	);
};

export default Services;

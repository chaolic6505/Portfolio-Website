import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavItem,
	NavMenu,
	NavLinks,
	NavImage,
	NavImageNav,
} from './NavbarElements';
import myImage from '../../images/logo_now.png';
import { motion } from 'framer-motion';

const containerVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
	},
};
const divVariants = {
	hidden: {
		y: -150,
	},
	visible: {
		y: 0,
	},
};

const NavBar = ({ toggle }) => {
	return (
		<>
			<Nav>
				<NavbarContainer>
					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate="visible"
						transition={{ delay: 1.5, duration: 1.5 }}
					>
						<NavImageNav>
							<NavLogo to="/">
								<NavImage src={myImage} />
							</NavLogo>
						</NavImageNav>
					</motion.div>

					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>

					<NavMenu>
						<motion.div
							transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
							variants={divVariants}
							initial="hidden"
							animate="visible"
						>
							<NavItem>
								<NavLinks to="home">Home</NavLinks>
							</NavItem>
						</motion.div>
						<motion.div
							transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
							variants={divVariants}
							initial="hidden"
							animate="visible"
						>
							<NavItem>
								<NavLinks to="project">Project</NavLinks>
							</NavItem>
						</motion.div>
						<motion.div
							transition={{ delay: 0.9, type: 'spring', stiffness: 100 }}
							variants={divVariants}
							initial="hidden"
							animate="visible"
						>
							<NavItem>
								<NavLinks to="contact">Contact</NavLinks>
							</NavItem>
						</motion.div>
						<motion.div
							transition={{ delay: 1.2, type: 'spring', stiffness: 100 }}
							variants={divVariants}
							initial="hidden"
							animate="visible"
						>
							<NavItem>
								<NavLinks to="service">Service</NavLinks>
							</NavItem>
						</motion.div>
					</NavMenu>

					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate="visible"
						transition={{ delay: 2.2, duration: 1.0 }}
					>
						<NavImageNav>
							<NavLogo to="/">
								<NavImage src={myImage} />
							</NavLogo>
						</NavImageNav>
					</motion.div>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default NavBar;

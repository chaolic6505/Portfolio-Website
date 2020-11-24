import React from 'react';
import { FaBars } from 'react-icons/fa';
import { AnimatedLink } from '../common/AnimatedLink/index';
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
	NavImageNav2,
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
					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>

					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate="visible"
						transition={{ delay: 1.6, duration: 1.0 }}
					>
						<NavImageNav2>
							<NavLogo to="/">
								<NavImage src={myImage} />
							</NavLogo>
						</NavImageNav2>
					</motion.div>

					<NavMenu>
						<motion.div
							transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
							variants={divVariants}
							initial="hidden"
							animate="visible"
						>
							<NavItem>
								<NavLinks to="home">
									<AnimatedLink name={'Home'} />
								</NavLinks>
							</NavItem>
						</motion.div>
						<motion.div
							transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
							variants={divVariants}
							initial="hidden"
							animate="visible"
						>
							<NavItem>
								<NavLinks to="project">
									<AnimatedLink name={'Project'} />
								</NavLinks>
							</NavItem>
						</motion.div>
						<motion.div
							transition={{ delay: 0.9, type: 'spring', stiffness: 100 }}
							variants={divVariants}
							initial="hidden"
							animate="visible"
						>
							<NavItem>
								<NavLinks to="contact">
									<AnimatedLink name={'Contact'} />
								</NavLinks>
							</NavItem>
						</motion.div>
						<motion.div
							transition={{ delay: 1.2, type: 'spring', stiffness: 100 }}
							variants={divVariants}
							initial="hidden"
							animate="visible"
						>
							<NavItem>
								<NavLinks to="service">
									{' '}
									<AnimatedLink name={'Service'} />
								</NavLinks>
							</NavItem>
						</motion.div>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default NavBar;

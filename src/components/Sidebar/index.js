import React from 'react';
import myImage from '../../images/logo_now.png';
import { motion } from 'framer-motion';
import { scrollTop } from '../../Function/ScrollToTop';
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLinks,
} from './SideBarElements';
import { NavLogo, NavImage } from '../Navbar/NavbarElements';

const divVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
	},
};
const Sidebar = ({ isOpen, toggle, scrollToTop }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<motion.div
						variants={divVariants}
						initial="hidden"
						animate="visible"
						transition={{ delay: 0.8, duration: 0.3 }}
					>
						<motion.li
							whileHover={{ scale: 1.1, originX: 0 }}
							transition={{ type: 'spring', stiffness: 300 }}
						>
							<SidebarLinks
								onClick={() => {
									toggle();
									scrollTop();
								}}
							>
								HOME
							</SidebarLinks>
						</motion.li>
					</motion.div>
					<motion.div
						variants={divVariants}
						initial="hidden"
						animate="visible"
						transition={{ delay: 0.2, duration: 0.3 }}
					>
						<motion.li
							whileHover={{ scale: 1.1, originX: 0.5 }}
							transition={{ type: 'spring', stiffness: 300 }}
						>
							<SidebarLinks
								onClick={toggle}
								spy={true}
								to="about"
								smooth={true}
								duration={500}
								exact={true}
							>
								About
							</SidebarLinks>
						</motion.li>
					</motion.div>
					<motion.div
						variants={divVariants}
						initial="hidden"
						animate="visible"
						transition={{ delay: 1.2, duration: 0.3 }}
					>
						<motion.li
							whileHover={{ scale: 1.1, originX: 0 }}
							transition={{ type: 'spring', stiffness: 300 }}
						>
							<SidebarLinks
								onClick={toggle}
								spy={true}
								to="project"
								smooth={true}
								duration={500}
								exact={true}
							>
								Projects
							</SidebarLinks>
						</motion.li>
					</motion.div>
					<motion.div
						variants={divVariants}
						initial="hidden"
						animate="visible"
						transition={{ delay: 0.5, duration: 0.3 }}
					>
						<motion.li
							whileHover={{ scale: 1.1, originX: 0.5 }}
							transition={{ type: 'spring', stiffness: 300 }}
						>
							<SidebarLinks
								onClick={toggle}
								spy={true}
								to="service"
								smooth={true}
								duration={500}
								exact={true}
							>
								Services
							</SidebarLinks>
						</motion.li>
					</motion.div>
				</SidebarMenu>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;

import React from 'react';
import myImage from '../../images/logo_now.png';
import { motion } from 'framer-motion';
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
const Sidebar = ({ isOpen, toggle }) => {
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
							<SidebarLinks to="home">HOME</SidebarLinks>
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
							<SidebarLinks to="project">Project</SidebarLinks>
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
							<SidebarLinks to="contact">Contact</SidebarLinks>
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
							<SidebarLinks to="service">Services</SidebarLinks>
						</motion.li>
					</motion.div>
				</SidebarMenu>
				{/* <NavLogo to="/">
					<NavImage src={myImage} />
				</NavLogo> */}
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;

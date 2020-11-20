import React from 'react';
import { motion } from 'framer-motion';
import ReactNavbar from 'react-responsive-animate-navbar';
import './Navbar.css';

const Navigationbar = () => {
	return (
		<motion.div
			transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
			initial={{ y: -150 }}
			animate={{ y: 5 }}
		>
			<ReactNavbar
				color="rgb(25, 25, 25)"
				logo="https://svgshare.com/i/KHh.svg"
				menu={[
					{ name: 'HOME', to: '/' },
					{ name: 'ARTICLES', to: '/articles' },
					{ name: 'ABOUT ME', to: '/about' },
					{ name: 'CONTACT', to: '/contact' },
				]}
				social={[
					{
						name: 'Linkedin',
						url: 'https://www.linkedin.com/in/nazeh-taha/',
						icon: ['fab', 'linkedin-in'],
					},
					{
						name: 'Facebook',
						url: 'https://www.facebook.com/nazeh200/',
						icon: ['fab', 'facebook-f'],
					},
					{
						name: 'Instagram',
						url: 'https://www.instagram.com/nazeh_taha/',
						icon: ['fab', 'instagram'],
					},
					{
						name: 'Twitter',
						url: 'http://nazehtaha.herokuapp.com/',
						icon: ['fab', 'twitter'],
					},
				]}
			/>
		</motion.div>
	);
};

export default Navigationbar;

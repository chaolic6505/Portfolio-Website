import React, { useState } from 'react';

import Sidebar from '../components/Sidebar/';
import Navbar from '../components/Navbar/';
import MainInfo from '../components/MainInfo';
import ProjectSection from '../components/ProjectSection';
import Contact from '../components/Contact';

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<MainInfo />
			<ProjectSection />
			{/* <Contact /> */}
		</>
	);
};

export default Home;

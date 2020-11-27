import React, { useState } from 'react';

import Sidebar from '../components/Sidebar/';
import Navbar from '../components/Navbar/';
import MainInfo from '../components/MainInfo';
import ProjectSection from '../components/ProjectSection';
import Contact from '../components/Contact';
import { contactObjOne } from '../components/Contact/Data';
import Services from '../components/Services';

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
			<Contact {...contactObjOne} />
			<ProjectSection />
			<Services /> 
		</>
	);
};

export default Home;

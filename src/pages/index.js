import React, { useState } from 'react';

import Sidebar from '../components/Sidebar/';
import Navbar from '../components/Navbar/';
import Home from '../components/Home';
import Project from '../components/Project';
import About from '../components/About';
import { contactObjOne } from '../components/About/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';
import { scrollTop } from '../Function/ScrollToTop';

const Main = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} scrollToTop={scrollTop} />
			<Navbar toggle={toggle} />
			<Home />
			<About {...contactObjOne} />
			<Project />
			<Services />
			<Footer />
		</>
	);
};

export default Main;

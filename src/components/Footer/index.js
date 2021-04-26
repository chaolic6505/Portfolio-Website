import React from 'react';
import './Footer.css';
import { Navbar, Container, Row, Col } from 'reactstrap';

const Footer = () => {
	return (
		<div className="footerDiv">
			<p className="footerText">
				Chao-Li Chen  <i className="fa">&#xf1f9;</i>
				<span> {new Date().getFullYear()}</span>
			</p>
		</div>
	);
};
export default Footer;

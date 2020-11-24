import './AnimatedLink.css';
import React from 'react';
export const AnimatedLink = ({name}) => {
	return (
		<h2>
			<a className="hover-3 LinkA">
				<span className="LinkSpan">{name}</span>
			</a>
		</h2>
	);
};

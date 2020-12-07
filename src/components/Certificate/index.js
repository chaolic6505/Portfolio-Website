import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import GAD from '../../images/certificates/GAD.png';
import GAMC from '../../images/certificates/GAMC.png';
import GASH from '../../images/certificates/GASH.png';
import GAVC from '../../images/certificates/GAVC.png';
import HSCMC from '../../images/certificates/HSCMC.png';
import HSIMC from '../../images/certificates/HSIMC.png';
import SAC from '../../images/certificates/SAC.png';
import SAKRE from '../../images/certificates/SAKRE.png';
import SASEO from '../../images/certificates/SASEO.png';
import SATSE from '../../images/certificates/SATSE.png';
import SMMC from '../../images/certificates/SMMC.png';

export const Certificate = ({ toggler }) => {
	return (
		<>
			{/* <button onClick={() => setToggler(!toggler)}>Certificate Gallery</button> */}
			<FsLightbox
				toggler={toggler}
				showThumbsOnMount={true}
				sources={[GAD, GAMC, GASH, GAVC, HSCMC, HSIMC, SAC, SAKRE, SASEO, SATSE, SMMC]}
			/>
		</>
	);
};

export default Certificate;

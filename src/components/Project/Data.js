import REACT from '../../images/react.svg';
import PYTHON from '../../images/python.png';
import NODEJS from '../../images/nodejs.svg';
import CSS from '../../images/css.png';
import P1 from '../../images/p1.png';
import about from '../../images/about.png';
import project from '../../images/project.png';
import service from '../../images/service.png';
import P2 from '../../images/CDS.png';
import CDSLOGIN from '../../images/CDSLOGIN.png';
import P3 from '../../images/SH.png';
import SHFP from '../../images/SHFP.png';
import SHNA from '../../images/SHNA.png';
import SHPD from '../../images/SHPD.png';
import SHPP from '../../images/SHPP.png';
import SHSUS from '../../images/SHSUS.png';
import SMH from '../../images/SMH.png';
import SMRIGISTER from '../../images/SMRIGISTER.png';
import SMLOGIN from '../../images/SMLOGIN.png';
import SMM from '../../images/SMM.png';
import SMS from '../../images/SMS.png';

export const cardOBJ = [
	{
		Photo: [P1, about, project, service],
		PS: REACT,
		H2: 'Personal Portfolio',
		DES: 'CSS3 / HTML5 / React / Affinity Designer',
	},
	{
		Photo: [P2, CDSLOGIN],
		PS: PYTHON,
		H2: 'Team Project - Music Player',
		DES: 'Flask / SQLAlchemy / AWS S3 / Jinja2 / SQLite',
	},
	{
		Photo: [P3, SHFP, SHNA, SHPD, SHPP, SHSUS],
		PS: CSS,
		H2: 'Ecommerce Website Resign',
		DES: 'CSS3 / HTML5 / Bootstrap / Affinity Designer',
	},
	{
		Photo: [SMLOGIN, SMRIGISTER, SMH, SMM, SMS],
		PS: NODEJS,
		H2: 'Team Project - Dating App',
		DES: 'Mongo DB / Express JS / EJS / Node JS',
	},
];

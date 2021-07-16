import skillImages from './loadSkillImages';
import fakebookIcon from '../images/projects/fakebook/icon.svg';
import fakebook1 from '../images/projects/fakebook/1.svg';
import fakebook2 from '../images/projects/fakebook/2.gif';
import fakebook3 from '../images/projects/fakebook/3.png';
import messageIcon from '../images/projects/messageBoard/icon.svg';
import message1 from '../images/projects/messageBoard/1.svg';
import message2 from '../images/projects/messageBoard/2.png';
import waldoIcon from '../images/projects/wheres-waldo/icon.svg';
import waldo1 from '../images/projects/wheres-waldo/1.svg';
import waldo2 from '../images/projects/wheres-waldo/2.png';
import waldo3 from '../images/projects/wheres-waldo/3.jpg';
import gameIcon from '../images/projects/gameInventory/icon.svg';
import game1 from '../images/projects/gameInventory/1.svg';
import game2 from '../images/projects/gameInventory/2.png';

const { Express, MongoDB, Node, PostgreSQL, Pug, ReactImg, Sass } = skillImages;

const main = [
	{
		icon: fakebookIcon,
		title: 'Fakebook',
		images: [fakebook1, fakebook2, fakebook3],
		description: 'Create and share posts with friends.',
		skills: [MongoDB, Express, ReactImg, Node],
		code: 'https://github.com/DanielTran0/fakebook-client',
		site: 'https://fakebook-danieltran.netlify.app/#/login',
		font: 'Roboto',
		cardColor: 'hsla(214, 89%, 52%, 1)',
	},
	{
		icon: messageIcon,
		title: 'Message Board',
		images: [message1, message2],
		description: 'Post anonymous messages to visitors.',
		skills: [MongoDB, Express, Node, Pug, Sass],
		code: 'https://github.com/DanielTran0/message-board',
		site: 'https://boiling-mesa-64968.herokuapp.com/',
		font: 'Montserrat',
		cardColor: 'hsla(300, 100%, 30%, 1)',
	},
	{
		icon: waldoIcon,
		title: "Where's Waldo - MK",
		images: [waldo1, waldo2, waldo3],
		description: 'Can you find all the Mortal Kombat characters?',
		skills: [ReactImg],
		code: 'https://github.com/DanielTran0/wheres-waldo',
		site: 'https://wheres-waldo-eb53c.firebaseapp.com/',
		font: 'mortal_kombatmk11',
		cardColor: 'hsla(360, 73%, 33%, 1)',
	},
	{
		icon: gameIcon,
		title: 'Game Inventory',
		images: [game1, game2],
		description: 'Track game titles, developer and genre.',
		skills: [PostgreSQL, Express, Node, Pug, Sass],
		code: 'https://github.com/DanielTran0/game-inventory',
		site: 'https://rocky-shelf-43502.herokuapp.com/',
		font: "'Press Start 2P'",
		fontSize: '18px',
		cardColor: 'hsla(90, 73%, 33%, 1)',
	},
];

const carousel = [];

export default { main, carousel };
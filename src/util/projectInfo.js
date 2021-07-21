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
import weatherIcon from '../images/projects/weather/icon.svg';
import weather1 from '../images/projects/weather/1.svg';
import weather2 from '../images/projects/weather/2.png';
import sketchIcon from '../images/projects/sketch/icon.svg';
import sketch1 from '../images/projects/sketch/1.svg';
import sketch2 from '../images/projects/sketch/2.png';

const {
	Express,
	MongoDB,
	Node,
	PostgreSQL,
	Pug,
	ReactImg,
	Sass,
	JavaScript,
	HTML,
	CSS,
	FireBase,
} = skillImages;

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
		icon: waldoIcon,
		title: "Where's Waldo - MK",
		images: [waldo1, waldo2, waldo3],
		description: 'Can you find all the Mortal Kombat characters?',
		skills: [ReactImg, FireBase],
		code: 'https://github.com/DanielTran0/wheres-waldo',
		site: 'https://wheres-waldo-eb53c.firebaseapp.com/',
		font: 'mortal_kombatmk11',
		cardColor: 'hsla(360, 73%, 33%, 1)',
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
		cardColor: 'hsla(301, 100%, 20%, 1)',
	},

	{
		icon: gameIcon,
		title: 'Game Inventory',
		images: [game1, game2],
		description: 'Track game titles, developers and genres.',
		skills: [Express, Node, PostgreSQL, Pug, Sass],
		code: 'https://github.com/DanielTran0/game-inventory',
		site: 'https://rocky-shelf-43502.herokuapp.com/',
		font: "'Press Start 2P'",
		cardColor: 'hsla(90, 73%, 33%, 1)',
	},
];

const other = [
	{
		icon: weatherIcon,
		title: 'City Weather',
		images: [weather1, weather2],
		description: 'Check ot the weather for any city around the world.',
		skills: [JavaScript, HTML, CSS],
		code: 'https://github.com/DanielTran0/City_Weather',
		site: 'https://danieltran0.github.io/City_Weather/',
		font: 'Belgrano',
		cardColor: 'hsla(197, 75%, 58%, 1)',
	},
	{
		icon: sketchIcon,
		title: 'Etch-a-sketch',
		images: [sketch1, sketch2],
		description: 'Draw whatever comes to mind.',
		skills: [JavaScript, HTML, CSS],
		code: 'https://github.com/DanielTran0/Etch_a_Sketch',
		site: 'https://danieltran0.github.io/Etch_a_Sketch/',
		font: 'Sriracha',
		cardColor: 'hsla(360, 100%, 39%, 1)',
	},
];

export default { main, other };

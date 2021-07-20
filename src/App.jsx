import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/app.css';

const App = () => {
	return (
		<div className='app'>
			<Navbar />
			<Intro />
			<Skills />
			<Projects />
			<Contact />
		</div>
	);
};

export default App;

import React from 'react';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import './styles/app.css';

const App = () => {
	return (
		<div className='app'>
			<div className='section-1'>
				<Navbar />
				<Intro />
			</div>

			<div className='section-2'>
				<Skills />
			</div>

			<div className='section-3'>
				<Projects />
			</div>
		</div>
	);
};

export default App;

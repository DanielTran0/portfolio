import React from 'react';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import './styles/app.css';
import Contact from './components/Contact';

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

				<div className='section-4'>
					<Contact />
				</div>
			</div>
		</div>
	);
};

export default App;

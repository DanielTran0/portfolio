import React from 'react';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import './styles/app.css';

const App = () => {
	return (
		<div className='app'>
			<div className='section1'>
				<Navbar />
				<Intro />
			</div>
		</div>
	);
};

export default App;

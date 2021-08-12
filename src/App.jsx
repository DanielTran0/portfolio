import React, { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
import './styles/app.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'aos/dist/aos.css';

const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

const App = () => {
	return (
		<div className='app'>
			<Navbar />
			<Intro />
			<Suspense fallback={<div>Loading...</div>}>
				<Skills />
				<Projects />
				<Contact />
			</Suspense>
		</div>
	);
};

export default App;

import React from 'react';
import main from '../images/misc/main.svg';

const Intro = () => {
	return (
		<section className='intro'>
			<h1>Hey, I&apos;m Daniel Tran</h1>
			<h3>
				A full stack web developer with a background in mechanical engineering.
			</h3>
			<button type='button'>My Projects</button>
			<img src={main} alt='main' />
		</section>
	);
};

export default Intro;

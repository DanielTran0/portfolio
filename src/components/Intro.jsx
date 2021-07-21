import React from 'react';

import main from '../images/misc/main.svg';

const Intro = () => {
	return (
		<section className='intro'>
			<div className='main'>
				<div className='text'>
					<h1 data-aos='fade-up' data-aos-delay='300'>
						Hey, I&apos;m Daniel Tran
					</h1>

					<h3 data-aos='fade-up' data-aos-delay='600'>
						A full stack web developer with a background in mechanical
						engineering.
					</h3>

					<div data-aos='fade-up' data-aos-delay='600'>
						<a href='#projects'>
							<button type='button'>My Projects</button>
						</a>
					</div>
				</div>

				<img src={main} alt='main' data-aos='fade-up' data-aos-delay='600' />
			</div>
		</section>
	);
};

export default Intro;

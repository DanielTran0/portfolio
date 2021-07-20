import React from 'react';
import { motion } from 'framer-motion';
import animations from '../util/animations';

import main from '../images/misc/main.svg';

const Intro = () => {
	const { up } = animations;
	const firstAnimation = up(0);
	const firstAnimate = {
		variants: firstAnimation,
		initial: firstAnimation.start,
		animate: firstAnimation.end,
	};
	const secondAnimation = up(0.4);
	const thirdAnimation = up(0.7);

	return (
		<section className='intro'>
			<div className='main'>
				<div className='text'>
					<motion.h1 {...firstAnimate}>Hey, I&apos;m Daniel Tran</motion.h1>

					<motion.h3 {...firstAnimate} animate={secondAnimation.end}>
						A full stack web developer with a background in mechanical
						engineering.
					</motion.h3>

					<motion.div {...firstAnimate} animate={secondAnimation.end}>
						<a href='#projects'>
							<button type='button'>My Projects</button>
						</a>
					</motion.div>
				</div>

				<motion.img
					src={main}
					alt='main'
					{...firstAnimate}
					animate={thirdAnimation.end}
				/>
			</div>
		</section>
	);
};

export default Intro;

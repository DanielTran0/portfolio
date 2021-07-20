import React from 'react';
import { motion } from 'framer-motion';
import animations from '../util/animations';

import main from '../images/misc/main.svg';

const Intro = () => {
	const { up } = animations;
	const animation1 = up(0.8, 0);
	const animation2 = up(0.8, 0.4);
	const animation3 = up(0.8, 0.7);
	const animation1Props = {
		variants: animation1,
		initial: animation1.start,
		animate: animation1.end,
	};

	return (
		<section className='intro'>
			<div className='main'>
				<div className='text'>
					<motion.h1 {...animation1Props}>Hey, I&apos;m Daniel Tran</motion.h1>

					<motion.h3 {...animation1Props} animate={animation2.end}>
						A full stack web developer with a background in mechanical
						engineering.
					</motion.h3>

					<motion.div {...animation1Props} animate={animation2.end}>
						<a href='#projects'>
							<button type='button'>My Projects</button>
						</a>
					</motion.div>
				</div>

				<motion.img
					src={main}
					alt='main'
					{...animation1Props}
					animate={animation3.end}
				/>
			</div>
		</section>
	);
};

export default Intro;

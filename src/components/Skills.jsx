import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from 'react-responsive';
import SkillIcon from './SkillIcon';
import skillImages from '../util/loadSkillImages';
import animations from '../util/animations';

const Skills = () => {
	const isNotDesktop = useMediaQuery({ maxWidth: 768 });
	const controls1 = useAnimation();
	const controls2 = useAnimation();
	const controls3 = useAnimation();
	const [ref1, inView1] = useInView();
	const [ref2, inView2] = useInView();
	const [ref3, inView3] = useInView();
	const animation1 = animations.up(0.5, isNotDesktop ? 0 : 1);
	const animationProps = {
		variants: animation1,
		initial: animation1.start,
		animate: controls1,
	};

	useEffect(() => {
		if (inView1) {
			controls1.start('end');
		}
		if (inView2) {
			controls2.start('end');
		}
		if (inView3) {
			controls3.start('end');
		}
	}, [inView1, inView2, inView3]);

	const {
		CSS,
		Express,
		FireBase,
		Git,
		GitHub,
		Heroku,
		HTML,
		JavaScript,
		Jest,
		MongoDB,
		Netlify,
		Node,
		PostgreSQL,
		Pug,
		ReactImg,
		Sass,
	} = skillImages;

	const frontEnd = [HTML, CSS, JavaScript, ReactImg, Sass];
	const backEnd = [Node, Express, MongoDB, PostgreSQL, JavaScript, Pug];
	const misc = [Git, GitHub, Jest, Heroku, Netlify, FireBase];

	return (
		<section id='skills-section'>
			<h1>Skills & Tools</h1>

			<div className='groups'>
				<motion.div className='front' ref={ref1} {...animationProps}>
					<h2>Front End</h2>
					<div className='group'>
						{frontEnd.map((skill) => (
							<div className='container' key={skill}>
								<SkillIcon imageUrl={skill} />
							</div>
						))}
					</div>
				</motion.div>

				<motion.div
					className='back'
					ref={ref2}
					{...animationProps}
					animate={controls2}
				>
					<h2>Back End</h2>
					<div className='group'>
						{backEnd.map((skill) => (
							<div className='container' key={skill}>
								<SkillIcon imageUrl={skill} />
							</div>
						))}
					</div>
				</motion.div>

				<motion.div
					className='misc'
					ref={ref3}
					{...animationProps}
					animate={controls3}
				>
					<h2>Miscellaneous</h2>
					<div className='group'>
						{misc.map((skill) => (
							<div className='container' key={skill}>
								<SkillIcon imageUrl={skill} />
							</div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Skills;

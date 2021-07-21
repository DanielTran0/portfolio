import React from 'react';
import { useMediaQuery } from 'react-responsive';
import SkillIcon from './SkillIcon';
import skillImages from '../util/loadSkillImages';

const Skills = () => {
	const inIntroViewHeight1 = useMediaQuery({ minHeight: 770, maxWidth: 619 });
	const inIntroViewHeight2 = useMediaQuery({ minHeight: 611, maxWidth: 916 });
	const inIntroViewHeightAll = useMediaQuery({
		minHeight: 611,
		minWidth: 922,
	});

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
				<div className='front'>
					<h2>Front End</h2>
					<div
						className='group'
						data-aos='fade-up'
						data-aos-delay={
							inIntroViewHeight1 || inIntroViewHeight2 || inIntroViewHeightAll
								? '600'
								: '0'
						}
					>
						{frontEnd.map((skill) => (
							<div className='container' key={skill}>
								<SkillIcon imageUrl={skill} />
							</div>
						))}
					</div>
				</div>

				<div className='back'>
					<h2>Back End</h2>
					<div
						className='group'
						data-aos='fade-up'
						data-aos-delay={
							inIntroViewHeight2 || inIntroViewHeightAll ? '600' : '0'
						}
					>
						{backEnd.map((skill) => (
							<div className='container' key={skill}>
								<SkillIcon imageUrl={skill} />
							</div>
						))}
					</div>
				</div>

				<div className='misc'>
					<h2>Miscellaneous</h2>
					<div
						className='group'
						data-aos='fade-up'
						data-aos-delay={inIntroViewHeightAll ? '600' : '0'}
					>
						{misc.map((skill) => (
							<div className='container' key={skill}>
								<SkillIcon imageUrl={skill} />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;

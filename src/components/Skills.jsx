import React from 'react';
import SkillIcon from './SkillIcon';
import skillImages from '../util/loadSkillImages';

const Skills = () => {
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
		<div className='skills-section'>
			<h1>Skills & Tools</h1>

			<div className='groups'>
				<div className='front'>
					<h3>Front End</h3>
					<div className='group'>
						{frontEnd.map((skill) => (
							<SkillIcon imageUrl={skill} key={skill} />
						))}
					</div>
				</div>

				<div className='back'>
					<h3>Back End</h3>
					<div className='group'>
						{backEnd.map((skill) => (
							<SkillIcon imageUrl={skill} key={skill} />
						))}
					</div>
				</div>

				<div className='misc'>
					<h3>Miscellaneous</h3>
					<div className='group'>
						{misc.map((skill) => (
							<SkillIcon imageUrl={skill} key={skill} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;

import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import SkillIcon from './SkillIcon';

const ProjectCard = ({ info }) => {
	const {
		icon,
		title,
		images,
		description,
		skills,
		code,
		site,
		font,
		cardColor,
	} = info;

	const imageComponents = images.map((image) => (
		<img src={image} alt={title} key={title} />
	));

	const skillIcons = skills.map((skill) => (
		<SkillIcon imageUrl={skill} key={skill} />
	));

	return (
		<div className='card' style={{ backgroundColor: cardColor }}>
			<div className='header'>
				<a href={site} target='#blank' style={{ fontFamily: font }}>
					<img src={icon} alt='icon' />
					<h2>{title}</h2>
				</a>
			</div>

			<Carousel
				className='carousel'
				dynamicHeight
				emulateTouch
				infiniteLoop
				interval={3000}
				showThumbs={false}
				showStatus={false}
			>
				{imageComponents}
			</Carousel>

			<div className='details'>
				<p>{description}</p>
				<div className='skills'>{skillIcons}</div>
			</div>

			<div className='links'>
				<button type='button'>
					<a href={code} target='#blank'>
						Repo
					</a>
				</button>

				<button type='button'>
					<a href={site} target='#blank'>
						Site
					</a>
				</button>
			</div>
		</div>
	);
};

ProjectCard.propTypes = {
	info: PropTypes.shape({
		icon: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		images: PropTypes.arrayOf(PropTypes.string).isRequired,
		description: PropTypes.string.isRequired,
		skills: PropTypes.arrayOf(PropTypes.string).isRequired,
		code: PropTypes.string.isRequired,
		site: PropTypes.string.isRequired,
		font: PropTypes.string.isRequired,
		fontSize: PropTypes.string,
		cardColor: PropTypes.string.isRequired,
	}).isRequired,
};

export default ProjectCard;

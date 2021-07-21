import React from 'react';
import Masonry from 'react-masonry-css';
import ProjectCard from './ProjectCard';
import projectInfo from '../util/projectInfo';

const Projects = () => {
	const { main, other } = projectInfo;
	const breakPoints = {
		default: 2,
		900: 1,
	};

	const cardComponents = main.map((project, index) => (
		<ProjectCard info={project} key={project.title} index={index} />
	));

	const otherCards = other.map((project, index) => (
		<ProjectCard info={project} key={project.title} index={index} />
	));

	return (
		<div id='projects'>
			<h1>Projects</h1>

			<Masonry
				className='group'
				breakpointCols={breakPoints}
				columnClassName='my-masonry-grid_column'
			>
				{cardComponents}
			</Masonry>

			<h1>Pure JavaScript Projects</h1>

			<Masonry
				className='group'
				breakpointCols={breakPoints}
				columnClassName='my-masonry-grid_column'
			>
				{otherCards}
			</Masonry>
		</div>
	);
};

export default Projects;

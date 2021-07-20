import React from 'react';
import Masonry from 'react-masonry-css';
import ProjectCard from './ProjectCard';
import projectInfo from '../util/projectInfo';

const Projects = () => {
	const { main } = projectInfo;
	const breakPoints = {
		default: 2,
		900: 1,
	};

	const cardComponents = main.map((project) => (
		<ProjectCard info={project} key={project.title} />
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
		</div>
	);
};

export default Projects;

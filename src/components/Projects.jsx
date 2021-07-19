import React from 'react';
import ProjectCard from './ProjectCard';
import projectInfo from '../util/projectInfo';

const Projects = () => {
	const { main } = projectInfo;

	const cardComponents = main.map((project) => (
		<ProjectCard info={project} key={project.title} />
	));

	return (
		<div id='projects'>
			<h1>Projects</h1>
			<div className='group'>{cardComponents}</div>
		</div>
	);
};

export default Projects;

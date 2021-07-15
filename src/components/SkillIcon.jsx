import React from 'react';
import PropTypes from 'prop-types';

const SkillIcon = ({ imageUrl }) => {
	const skillName = imageUrl.split('/')[4].split('.')[0];

	return (
		<div className='icon'>
			<img src={imageUrl} alt='' />
			<p>{skillName}</p>
		</div>
	);
};

SkillIcon.propTypes = {
	imageUrl: PropTypes.string.isRequired,
};

export default SkillIcon;

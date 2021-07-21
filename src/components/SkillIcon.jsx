import React from 'react';
import PropTypes from 'prop-types';

const SkillIcon = ({ imageUrl }) => {
	const UrlSplit = imageUrl.split('/');
	const skillName = UrlSplit[UrlSplit.length - 1].split('.')[0];

	return (
		<div className='icon'>
			<img src={imageUrl} alt={skillName} />
			<p>{skillName}</p>
		</div>
	);
};

SkillIcon.propTypes = {
	imageUrl: PropTypes.string.isRequired,
};

export default SkillIcon;

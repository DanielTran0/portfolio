const up = (duration, delay) => {
	return {
		start: {
			opacity: 0,
			y: '200px',
		},
		end: {
			opacity: 1,
			y: '0px',
			transition: {
				type: 'tween',
				duration,
				delay,
			},
		},
	};
};

export default { up };

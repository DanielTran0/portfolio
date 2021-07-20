const up = (delay) => {
	return {
		start: {
			opacity: 0,
			y: '200px',
		},
		end: {
			opacity: 1,
			y: '0px',
			transition: {
				duration: 0.8,
				type: 'tween',
				delay,
			},
		},
	};
};

export default { up };

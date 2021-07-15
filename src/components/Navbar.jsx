import React from 'react';
import { useMediaQuery } from 'react-responsive';
import menu from '../images/misc/menu.svg';

const Navbar = () => {
	const isMobile = useMediaQuery({ maxWidth: 425 });

	return (
		<div className='navbar'>
			{isMobile && (
				<button className='menu' type='button'>
					<img src={menu} alt='menu' />
				</button>
			)}
		</div>
	);
};

export default Navbar;

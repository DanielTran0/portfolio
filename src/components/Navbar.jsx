import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

import menu from '../images/misc/menu.svg';
import close from '../images/misc/close.svg';
import favicon from '../images/misc/favicon.ico';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const isNotDesktop = useMediaQuery({ maxWidth: 768 });

	const toggleMenu = () => {
		setIsOpen((prevState) => !prevState);
	};

	const navLinks = (
		<ul>
			<li>
				<a href='#skills-section' onClick={toggleMenu}>
					Skills
				</a>
			</li>
			<li>
				<a href='#projects' onClick={toggleMenu}>
					Projects
				</a>
			</li>
			<li>
				<a href='#contact' onClick={toggleMenu}>
					Contact
				</a>
			</li>
		</ul>
	);

	return (
		<header id='navbar'>
			<img src={favicon} alt='logo' />

			{isNotDesktop && (
				<button className='menuBar' type='button' onClick={toggleMenu}>
					<img src={isOpen ? close : menu} alt='menu' />
				</button>
			)}

			{!isNotDesktop && <nav className='desktop'>{navLinks}</nav>}

			<AnimatePresence>
				{isOpen && isNotDesktop && (
					<motion.nav
						className='mobile'
						initial={{ y: -200 }}
						animate={{ y: 0 }}
						transition={{ type: 'tween', duration: 0.4 }}
						exit={{ y: -200 }}
					>
						{navLinks}
					</motion.nav>
				)}
			</AnimatePresence>
		</header>
	);
};

export default Navbar;

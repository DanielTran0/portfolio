import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion, useAnimation } from 'framer-motion';

import emailIcon from '../images/misc/email.svg';
import gitHubIcon from '../images/misc/gitHub.svg';

const Contact = () => {
	const [formValues, setFormValues] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [formErrors, setFormErrors] = useState({});
	const succussControl = useAnimation();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSuccussMessage = () => {
		succussControl.start({
			opacity: [0, 1, 0],
			y: [0, -50, 0],
			transition: { duration: 5, times: [0, 0.2, 1] },
		});
	};

	const checkFormErrors = () => {
		const { name, email, message } = formValues;
		let errorMsgs = {};
		const emailRegEx =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (!name) {
			errorMsgs = { name: 'Required Field' };
		}
		if (!email) {
			errorMsgs = { ...errorMsgs, email: ' ' };
		}
		if (email && !emailRegEx.test(email.toLowerCase())) {
			errorMsgs = { ...errorMsgs, email: 'Invalid Email' };
		}
		if (!message) {
			errorMsgs = { ...errorMsgs, message: 'Required Field' };
		}

		if (Object.keys(errorMsgs).length) {
			setFormErrors(errorMsgs);
			return true;
		}

		return false;
	};

	const sendEmail = async (e) => {
		e.preventDefault();
		setFormErrors({});

		if (checkFormErrors()) {
			return;
		}

		try {
			emailjs.sendForm(
				'service_m6fw91b',
				'template_z4d6bx8',
				e.target,
				'user_olf5BtGVMwQ0uX6RzS5cL'
			);
			e.target.reset();
			handleSuccussMessage();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<section id='contact'>
			<div className='shell'>
				<div className='container'>
					<h1>Contact</h1>

					<p>
						Leave me a message and I&apos;ll get back to you within 1 to 2 days.
					</p>

					<div className='container2'>
						<form noValidate autoComplete='off' onSubmit={sendEmail}>
							<input
								className={formErrors.name ? 'field error' : 'field'}
								type='text'
								name='name'
								placeholder='Name'
								onChange={handleChange}
							/>
							<input
								className={formErrors.email ? 'field error' : 'field'}
								type='email'
								name='email'
								placeholder='Email'
								onChange={handleChange}
							/>
							{formErrors.email && (
								<p className='error-text'>{formErrors.email}</p>
							)}
							<textarea
								className={formErrors.message ? 'field error' : 'field'}
								name='message'
								placeholder='Your Message...'
								onChange={handleChange}
							/>
							<input className='submit' type='submit' value='Send Message' />
						</form>

						<ul className='links'>
							<li>
								<a href='mailto:danieltran770@gmail.com' target='#blank'>
									<img src={emailIcon} alt='icon' />
									danieltran770@gmail.com
								</a>
							</li>
							<li>
								<a href='https://github.com/DanielTran0' target='#blank'>
									<img src={gitHubIcon} alt='icon' />
									Github
								</a>
							</li>
						</ul>
					</div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={succussControl}
						className='sent'
					>
						Your Message Has Been Sent!
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Contact;

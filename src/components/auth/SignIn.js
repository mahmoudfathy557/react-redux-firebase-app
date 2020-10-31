import React, { useState } from 'react';

const SignIn = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const onSubmit = (e) => {
		e.preventDefault();
		console.log(email, password, 'submitted');
	};
	return (
		<div className='container'>
			<form onSubmit={onSubmit} className='white'>
				<h5 className='grey-text text-darken-3 mb-5'>Sign In</h5>
				<div className='input-field'>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						name='email'
						id='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className='input-field'>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						name='password'
						id='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className='input-field'>
					<button type='submit' className='btn pink lighten-1 z-depth-0 '>
						Login
					</button>
				</div>
			</form>
		</div>
	);
};

export default SignIn;

import React, { useState } from 'react';

const SignUp = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ firstName, setFirstName ] = useState('');
	const [ lastName, setLastName ] = useState('');
	const onSubmit = (e) => {
		e.preventDefault();
		console.log(email, password, firstName, lastName, 'submitted');
	};
	return (
		<div className='container'>
			<form onSubmit={onSubmit} className='white '>
				<h5 className='grey-text text-darken-3 mb-5'>Sign Up</h5>
				<div className='input-field'>
					<label htmlFor='email'>Email</label>
					<input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
				</div>
				<div className='input-field'>
					<label htmlFor='password'>Password</label>
					<input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
				</div>
				<div className='input-field'>
					<label htmlFor='firstName'>first Name</label>
					<input
						type='text'
						id='firstName'
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</div>
				<div className='input-field'>
					<label htmlFor='lastName'>Last Name</label>
					<input type='text' id='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} />
				</div>
				<div className='input-field'>
					<button className='btn pink lighten-1 z-depth-0 '>Login</button>
				</div>
			</form>
		</div>
	);
};

export default SignUp;

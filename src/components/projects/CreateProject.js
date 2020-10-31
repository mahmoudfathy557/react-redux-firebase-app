import React, { useState } from 'react';

const CreateProject = () => {
	const [ title, setTitle ] = useState('');
	const [ content, setContent ] = useState('');
	const onSubmit = (e) => {
		e.preventDefault();
		console.log(title, content, 'submitted');
	};
	return (
		<div className='container'>
			<form onSubmit={onSubmit} className='white'>
				<h5 className='grey-text text-darken-3 mb-5'>Create New Project</h5>
				<div className='input-field'>
					<label htmlFor='title'>Title</label>
					<input
						type='text'
						name='title'
						id='title'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className='input-field'>
					<label htmlFor='content'>Content</label>
					<textarea
						className='materialize-textarea'
						name='content'
						id='content'
						value={content}
						onChange={(e) => setContent(e.target.value)}
						cols='40'
						rows='20'
					/>
				</div>
				<div className='input-field'>
					<button type='submit' className='btn pink lighten-1 z-depth-0 '>
						Create
					</button>
				</div>
			</form>
		</div>
	);
};

export default CreateProject;

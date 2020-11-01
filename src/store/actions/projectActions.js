export const createProject = (project) => {
	return (dispatch, getState, { getFirestore, getFirebase }) => {
		// make async call to database
		const firestore = getFirestore();
		firestore
			.collection('projects')
			.add({
				...project,
				authorFirstName: 'mahmoud',
				authorLastName: 'fathy',
				authorId: 1245,
				createdAt: new Date(),
			})
			.then(() => {
				// make async call to database
				dispatch({ type: 'CREATE_PROJECT', project });
			})
			.catch((err) => {
				dispatch({ type: 'CREATE_PROJECT_ERROR', err });
			});
	};
};

export const createProject = (project) => {
	return (dispatch, getState, { getFirestore, getFirebase }) => {
		// make async call to database
		const firestore = getFirestore();
		const { firstName, lastName } = getState().firebase.profile;
		const { uid } = getState().firebase.auth;

		firestore
			.collection('projects')
			.add({
				...project,
				authorFirstName: firstName,
				authorLastName: lastName,
				authorId: uid,
				createdAt: new Date(),
			})
			.then((res) => {
				console.log(res);
				// make async call to database
				dispatch({ type: 'CREATE_PROJECT', project });
			})
			.catch((err) => {
				dispatch({ type: 'CREATE_PROJECT_ERROR', err });
			});
	};
};

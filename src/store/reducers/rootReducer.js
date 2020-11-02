import authReducer from './authReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	auth: authReducer,
	project: projectReducer,
	firebase: firebaseReducer, //to do the auth syncing
	firestore: firestoreReducer, // sync our file store to our state using firestore
});

export default rootReducer;

// the key name will be the data property on the state object

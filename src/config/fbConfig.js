import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDGQs9d3H1rT2RIxOUCEngDawVFhH0yguU',
	authDomain: 'react-redux-firebase-nin-3eab9.firebaseapp.com',
	databaseURL: 'https://react-redux-firebase-nin-3eab9.firebaseio.com',
	projectId: 'react-redux-firebase-nin-3eab9',
	storageBucket: 'react-redux-firebase-nin-3eab9.appspot.com',
	messagingSenderId: '616242951868',
	appId: '1:616242951868:web:d7a4d445bdc34f53d8c2b9',
	measurementId: 'G-58841ZR8SC',
};
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;

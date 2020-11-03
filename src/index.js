import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore, createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import firebase from './config/fbConfig';
import 'firebase/firestore';

const rrfConfig = {
	userProfile: 'users',
	useFirestoreForProfile: true,
	enableRedirectHandling: false,
	resetBeforeLogin: false,
};

const store = createStore(
	rootReducer,
	compose(applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })), reduxFirestore(firebase)),
);

// //construct required properties
// const profileSpecificProps = {
//   userProfile: 'users',
//   useFirestoreForProfile: true,
//   enableRedirectHandling: false,
//   resetBeforeLogin: false
// }

const rffProps = {
	firebase,
	useFirestoreForProfile: true,
	config: rrfConfig,
	dispatch: store.dispatch,
	createFirestoreInstance,
};

ReactDOM.render(
	<Provider store={store}>
		<ReactReduxFirebaseProvider {...rffProps}>
			<App />
		</ReactReduxFirebaseProvider>
	</Provider>,
	document.getElementById('root'),
);
registerServiceWorker();

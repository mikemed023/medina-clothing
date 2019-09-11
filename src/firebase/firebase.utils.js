import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyAyrOmJkkdN7qaWh_BTLFZ_rBGh0Qa8SsE',
	authDomain: 'medina-clothing.firebaseapp.com',
	databaseURL: 'https://medina-clothing.firebaseio.com',
	projectId: 'medina-clothing',
	storageBucket: '',
	messagingSenderId: '421649664402',
	appId: '1:421649664402:web:170a555e082d88df9e594b'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

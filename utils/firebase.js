import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBj0OL8x3pBGoDXHs0kEpTPFLk3chqfYh0",
	authDomain: "tiktokclone-372b9.firebaseapp.com",
	projectId: "tiktokclone-372b9",
	storageBucket: "tiktokclone-372b9.appspot.com",
	messagingSenderId: "840663421193",
	appId: "1:840663421193:web:aca6378885c68c9b3d43d8",
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

// const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { auth, db };

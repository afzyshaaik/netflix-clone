import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDXuVcOSpU240lW4hajJ9gi6GURI2AG3Gc",
    authDomain: "netflixclone1-e7117.firebaseapp.com",
    projectId: "netflixclone1-e7117",
    storageBucket: "netflixclone1-e7117.appspot.com",
    messagingSenderId: "108542434905",
    appId: "1:108542434905:web:045c9d6e7d579af1049b48"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();


export {auth,db};
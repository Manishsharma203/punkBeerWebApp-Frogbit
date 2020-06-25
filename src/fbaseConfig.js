import firebase from "firebase";

const firebaseConfig = {
    // apiKey: process.env.REACT_APP_API_KEY,
    apiKey:'AIzaSyCANiH1JaFZqFo_zlPKak_t1XzGNQRrgPI',
    authDomain: "punkbeerwebapp-frogbit.firebaseapp.com"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase;
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyA9FHEBQi4pXyLKlEYd2iRXim21ZTulNHQ",
    authDomain: "random-coffee-420901.firebaseapp.com",
    databaseURL: "https://random-coffee-420901-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "random-coffee-420901",
    storageBucket: "random-coffee-420901.appspot.com",
    messagingSenderId: "383459816523",
    appId: "1:383459816523:web:67adb0fd7f920f099489ce",
    measurementId: "G-VGM1TKVTKM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById('btn-google');
googleLogin.addEventListener('click', function() {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            window.location.href = "/logged.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
});
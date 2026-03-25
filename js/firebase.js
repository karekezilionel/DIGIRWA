
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyBbo7C9SODAIyT7x91jNEd4tfKtDlFdo6Y",
  authDomain: "digirwa-auth.firebaseapp.com",
  projectId: "digirwa-auth",
  storageBucket: "digirwa-auth.firebasestorage.app",
  messagingSenderId: "931703040889",
  appId: "1:931703040889:web:bebb5ceec62d89de5bdda8"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
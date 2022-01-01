import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseInitializing = () => {
    initializeApp(firebaseConfig);
}

export default firebaseInitializing
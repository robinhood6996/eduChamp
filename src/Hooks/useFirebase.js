import firebaseInitializing from "../Firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged,updateProfile,signOut,signInWithEmailAndPassword, GoogleAuthProvider ,signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";

firebaseInitializing()
const useFirebase = () => {
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const [user, setUser] = useState({})
const [error, setError] = useState('')

  const registerWithGoogleAndPass = (email, password, name, image) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setError('')
      updateProfile(auth.currentUser, {
        displayName: name, photoURL: image
      }).then(() => {
        setUser(user)
        setError('')
      }).catch((error) => {
        setError(error.message)
      });

    })
    .catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage)

    });
  }

  const logInWithEmailAndPass = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      const user = userCredential.user;
      setUser(user)
      setError('')
    })
    .catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage)
    });
  }

  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
    .then((result) => {
     const user = result.user;
      setUser(user)
      setError('')
  }).catch((error) => {
    const errorMessage = error.message;
    setError(errorMessage)
  });

  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)

        } else {
          setUser({})
        }
      });
  },[auth])

  const logOut = () => {
    signOut(auth).then(() => {
        setUser({})
        setError('')
      }).catch((error) => {
        setError(error.message)
      });
  }
  console.log(user);
  return {
    registerWithGoogleAndPass, logOut, logInWithEmailAndPass, error, setError, user,googleSignIn
  }
}

export default useFirebase
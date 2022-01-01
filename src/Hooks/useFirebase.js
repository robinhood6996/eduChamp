import firebaseInitializing from "../Firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged,updateProfile,signOut,signInWithEmailAndPassword  } from "firebase/auth";
import { useEffect, useState } from "react";

firebaseInitializing()
const useFirebase = () => {
const auth = getAuth();
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
      const errorCode = error.code;
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
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage)
    });
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
          const uid = user.uid;
          // ...
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
    registerWithGoogleAndPass, logOut, logInWithEmailAndPass, error, setError
  }
}

export default useFirebase
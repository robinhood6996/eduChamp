import firebaseInitializing from "../Firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

firebaseInitializing()
const useFirebase = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState({})
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [admin, setAdmin] = useState(false)
  let navigate = useNavigate()
  /* ============ Register with email and password=============== */
  const registerWithGoogleAndPass = (email, password, name, image,path) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        saveUserToDB(email, name, image, 'POST')
        setError('')
        setIsLoading(true)
        if(path){
          navigate(path)
        }
        else{
          navigate('/')
        }
        updateProfile(auth.currentUser, {
          displayName: name, photoURL: image
        }).then(() => {
          setUser(user)
          setError('')
          
        }).catch((error) => {
          setError(error.message)
        });

      })
      .finally(() => {
        setIsLoading(false)
      })

  }

  const logInWithEmailAndPass = (email, password, path) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        const user = userCredential.user;
        setUser(user)
        setError('')
        setIsLoading(true)
        if(path){
          navigate(path)
        }
        else{
          navigate('/')
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const googleSignIn = (path) => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUserToDB(user.email, user.displayName, user.photoURL, 'PUT')
        setUser(user)
        setError('')
        setIsLoading(true)
        if(path){
          navigate(path)
        }
        else{
          navigate('/')
        }
      }).catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }


  /* =======Save user email and user name into DB===== */


  /* ===== Observer user State ====== */
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)

      } else {
        setUser({})
      }
        setIsLoading(false)
    });
    return () => unSubscribe;
  }, [auth])
  
  const saveUserToDB = (email, displayName, photoURL, method) => {
    const user = { email, displayName, photoURL };
    fetch('http://localhost:5000/users', {
      method: method,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
      })
  }
    // admin check 
    useEffect(() => {
      fetch(`http://localhost:5000/users/${user.email}`)
          .then(res => res.json())
          .then(data => setAdmin(data.admin))
    }, [user.email])

  const logOut = () => {
    signOut(auth).then(() => {
      setUser({})
      setError('')
    }).catch((error) => {
      setError(error.message)
    });
  }

  return {
    registerWithGoogleAndPass, logOut, logInWithEmailAndPass, error, setError, user, googleSignIn, setIsLoading, isLoading, admin, setAdmin
  }
}

export default useFirebase
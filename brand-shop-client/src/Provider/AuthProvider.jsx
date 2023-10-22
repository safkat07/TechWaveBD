import {
    GithubAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
  } from "firebase/auth";
  import { createContext, useEffect, useState } from "react";
  import auth from "../Firebase/firebase.config";
  
export const AuthContext = createContext(null);
  const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
  
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
  
    //google provider
    const googleLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
    };
    //github provider
    const githubLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, githubProvider);
    };
  
    //register with password and email
    const createNewUser = ( email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const loginUser = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password);
    }
  
    //manage user
  
    // useEffect(() =>[
    //     onAuthStateChanged(auth, (currentUser) =>{
    //         setUser(currentUser)
    //         setTimeout(() =>{
    //             setLoading(false)
    //           },3000)
    //     })
    // ],[])
  
    useEffect(() => {
      onAuthStateChanged(auth, (Currentuser) => {
        setUser(Currentuser);
        //   setTimeout(() =>{
        //     setLoading(false)
        //   },3000)
        setLoading(false);
      });
    }, []);
  
    // console.log(user);
  
    //logout user
    const logOut = () => {
      setLoading(true);
      return signOut(auth);
    };
  
    const authInfo = {
      googleLogin,
      githubLogin,
      user,
      loading,
      logOut,
      createNewUser,
      loginUser
    };
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
  };
  
  export default AuthProvider;
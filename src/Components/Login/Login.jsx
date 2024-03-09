/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../Firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);

        })
        .catch(error =>{
            console.log('error', error.message)
        })

    }

    const handleGithubSignIn = () =>{
        signInWithPopup(auth, githubProvider)
        .then ( result => {
            const loggedInUser = result.user;
            setUser(loggedInUser);
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleSignOut = () =>{
        signOut(auth)
        .then(result => {
            setUser(null);
        })
        .catch(error => {
            console.log(error)
        } )
    }

    return (
        <div>
            { 
              user ? 
            <button onClick={handleSignOut}>Sign Out</button> :
            <>
            <button onClick={handleGoogleSignIn}>Google login</button>
            <button onClick={handleGithubSignIn}>Github login</button>
            </>
            
            }
            {
                 user && <div>
                    <h3>User : {user.displayName}</h3>
                    <p>User mail : {user.email}</p>
                    <img src={user.photoURL} alt="" />
                    <p>GGTuran wants you to know that he loves you</p>

                 </div>
            }
        </div>
    );
};

export default Login


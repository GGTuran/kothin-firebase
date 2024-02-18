/* eslint-disable no-unused-vars */
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState;
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, provider)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);

        })
        .catch(error =>{
            console.log('error', error.message)
        })

    }
    return (
        <div>
            <button onClick={handleGoogleSignIn}>Google login</button>
        </div>
    );
};

export default Login
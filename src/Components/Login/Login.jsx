/* eslint-disable no-unused-vars */
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/firebase.init";

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, provider)
        .then()
        .catch()

    }
    return (
        <div>
            <button onClick={handleGoogleSignIn}>Google login</button>
        </div>
    );
};

export default Login;
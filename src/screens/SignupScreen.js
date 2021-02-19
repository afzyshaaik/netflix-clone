import React, { useRef } from 'react'
import {auth} from '../firebase';
import "./SignupScreen.css"

function SignupScreen() {

    const emailref = useRef();
    const passwordref = useRef();

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailref.current.value,
            passwordref.current.value
        )      
        .catch((error) => {
            alert(error.message);
        });
        

    }
    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailref.current.value,
            passwordref.current.value
        )       
        .catch((error) => {
            alert(error.message);
        });
    }


    return (
        <div className="signupscreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailref} placeholder="Email" type="email" />
                <input ref={passwordref} placeholder="Password" type="password" />
                <button type="submit"  onClick={signIn}>Sign In</button>

                <h4>
                    <span className="signupscreen_gray">New to Netflix?</span>{' '}
                    
                    <span className="signupscreen_link" onClick={register}> Sign Up Now.</span> 
                </h4>
                
            </form>
            
        </div>
    )
}

export default SignupScreen

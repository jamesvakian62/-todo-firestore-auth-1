import React, { useRef } from 'react'
import Login from '../components/Login'
// #2 Import auth and signInWithEmailAndPassword
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../utils/firebase'


function Signin() {

    // Holds two useRef to reference the email and password we put in the input field of the login component
    const emailRef = useRef()
    const passwordRef = useRef()

 

    //#1 Create a async function that calls to firebase to sign in the user using email and password from input to check with authentication
    const login = async () => {
        // Try to sign in with email and password
        try {
            console.log("RUNNING")
            // Sign in the user using email and password from the Login input
            await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            .then((user)=> {
                if(user) {
                    window.location = "/dashboard"
                }
            })
        }
        // Catch the loggin failure 
        catch(error) {
            alert(error.message)
        }
    }

    

    return (
        <div>
            <Login
                title = "Sign in"
                button = "Sign in"
                href = "/signup"
                link = "Sign up"
                headerStatement = "Need an account?"
                emailInput = {emailRef}
                passwordInput = {passwordRef}
                // #5 Make sure to pass the btnFunciton down
                btnFunction={login}
            />
        </div>
    )
}

export default Signin

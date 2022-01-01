import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useRef } from 'react'
import Login from '../components/Login'
import { auth } from '../utils/firebase'
import db from '../utils/firebase'
import { doc, setDoc} from 'firebase/firestore'

function Signup() {

    // What does useRef do?
        // Holds two useRef
        const emailRef = useRef()
        const passwordRef = useRef()
    
    // Create a funciton that registers the new user
    const register = async () => {
        // Try to sign up with email and password
        try {
            await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            // After creating the user make an api call to firestore to add it to our database
            .then(async (cred)=> {
                // Create a document for the user using the credentials 
                await setDoc(doc(db,"users", `${cred.user.uid}`),
                {
                    // Pass in the fields of how you want to structure your data

                    tasks: [
                        {
                            text:"Create your first TODO",
                            status: true
                        }
                    ]
                })
                if(cred) {
                    window.location = "/dashboard"
                }
            })
        }
        catch(error) {
            alert(error.message)
        }
    }

    return (
        <div>
            <Login
                title = "Sign up"
                button = "Sign up"
                href = "/"
                link = "Sign in"
                headerStatement = "Already have an account?"
                btnFunction = {register}
                emailInput = {emailRef}
                passwordInput = {passwordRef}
            />
        </div>
    )
}

export default Signup

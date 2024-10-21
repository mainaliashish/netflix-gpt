import React, { useRef, useState } from 'react';
import Header from "./Header";
import { checkValidData } from "../utils/validate"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  const handleSubmit = () => {
      // console.log(email, password);
      const message = checkValidData(email.current.value, password.current.value);
      setErrorMessage(message);
      if (message) return;
      if(!isSignInForm) {
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          setErrorMessage(errorCode + '-' + errorMessage);
        });
      
      } else {
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + '-' + errorMessage);
        });
      
      }
  }
  return (
    <div>
      <Header/>
    <div className='absolute'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/GB-en-20241014-TRIFECTA-perspective_711384b8-06c7-4bfa-b4e4-59d73542dbeb_large.jpg" alt="" aria-hidden="true"/>
    </div>
      <form onSubmit={(e) => e.preventDefault()} className="p-12 w-3/12 absolute my-40 mx-auto right-0 left-0 bg-slate-800 bg-opacity-90 rounded-lg text-white">
        <h1 className='font-bold text-3xl text-white'>{ isSignInForm ? "Sign In" : "Sign Up" }</h1>
        {!isSignInForm && (
          <input type="text" ref={fullName} placeholder="Full Name" className="p-4 my-4 w-full bg-slate-700 rounded-lg"/>
        )}
        <input type="email" placeholder="Email Address" ref={email} className="p-4 my-4 w-full bg-slate-700 rounded-lg"/>
        <input type="password" placeholder="Password" ref={password} className="p-4 my-4 w-full  bg-slate-700 rounded-lg"/>
        <p className='text-red-500 font-bold text-lg'>{errorMessage}</p>
        <button className='py-4 my-6 bg-red-700 w-full text-white rounded-lg' onClick={handleSubmit}>
          { isSignInForm ? "Sign In" : "Sign Up" }
        </button>
        <p className='text-white cursor-pointer' onClick={toggleSignInForm}>
          {
            isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already registered? Sign In Now'
          }
        </p>
      </form>
    </div>
  );
}

export default Login;
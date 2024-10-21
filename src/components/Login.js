import React, { useState } from 'react';
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header/>
    <div className='absolute'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/GB-en-20241014-TRIFECTA-perspective_711384b8-06c7-4bfa-b4e4-59d73542dbeb_large.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/GB-en-20241014-TRIFECTA-perspective_711384b8-06c7-4bfa-b4e4-59d73542dbeb_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/GB-en-20241014-TRIFECTA-perspective_711384b8-06c7-4bfa-b4e4-59d73542dbeb_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/GB-en-20241014-TRIFECTA-perspective_711384b8-06c7-4bfa-b4e4-59d73542dbeb_small.jpg 959w" alt="" aria-hidden="true" class="default-ltr-cache-19j6xtr"/>
    </div>
      <form className="p-12 w-3/12 absolute my-40 mx-auto right-0 left-0 bg-slate-800 bg-opacity-90 rounded-lg text-white">
        <h1 className='font-bold text-3xl text-white'>{ isSignInForm ? "Sign In" : "Sign Up" }</h1>
        {!isSignInForm && (
          <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-slate-700 rounded-lg" required/>
        )}
        <input type="email" placeholder="Email Address" className="p-4 my-4 w-full bg-slate-700 rounded-lg" required/>
        <input type="password" placeholder="Password" className="p-4 my-4 w-full  bg-slate-700 rounded-lg" required/>
        <button className='py-4 my-6 bg-red-700 w-full text-white rounded-lg' type='submit'>
          { isSignInForm ? "Sign In" : "Sign Up" }
        </button>
        <p className='text-white cursor-pointer' span onClick={toggleSignInForm}>
          {
            isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already registered? Sign In Now'
          }
        </p>
      </form>
    </div>
  );
}

export default Login;
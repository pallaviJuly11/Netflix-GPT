/** @format */

import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const handleclick = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header></Header>
      <div className='absolute'>
        <img
          src='
https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/IN-en-20250113-TRIFECTA-perspective_febfa442-23d9-45f3-937e-72f8b971f7a9_medium.jpg'
          alt='logo '
        ></img>
      </div>
      <form className='absolute p-12  bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white'>
        <h1 className='font-bold p-4 text-3xl'>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type='text'
          placeholder='Enter Email'
          className='p-3 m-2 w-full'
        ></input>
        <input
          type='password'
          placeholder='Password'
          className='p-3 m-2 w-full'
        ></input>
        <button className='p-3 m-2 w-full bg-red-700'>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className='p-3 m-2' onClick={handleclick}>
          {isSignInForm ? "New User? Sign In" : "Already a User? Sign Up"}
        </p>
      </form>
    </div>
  );
};

export default Login;

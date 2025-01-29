/** @format */

import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import { checkValidEmail, checkValidPassword } from "../utills/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utills/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utills/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [emailErrorMessage, setEmailErrorMessage] = useState(null);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState(null);
  const [authErrorMessage, setAuthErrorMessage] = useState(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleEmailChange = () => {
    const email = emailRef.current.value;
    const errorMsg = checkValidEmail(email);
    setEmailErrorMessage(errorMsg);
  };
  const handlePasswordChange = () => {
    const password = passwordRef.current.value;
    const errorMsg = checkValidPassword(password);
    setPasswordErrorMessage(errorMsg);
  };
  const handleClick = () => {
    if (emailErrorMessage || passwordErrorMessage) return;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameRef.current.value,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          setAuthErrorMessage("");
          navigate("/browse");
        })
        .catch((error) => {
          // If Authentication Error
          const errorCode = error.code;
          const errorMessage = error.message;
          setAuthErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setAuthErrorMessage("");

          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setAuthErrorMessage(errorCode + "-" + errorMessage);
        });
    }
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className='absolute p-12  bg-black w-3/12 my-36 mx-auto right-0 left-0 opacity-85 rounded'
      >
        <h1 className='font-bold p-4 text-3xl  text-white'>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <p className='ml-2 text-red-700'>{authErrorMessage}</p>
        {!isSignInForm && (
          <input
            ref={nameRef}
            type='text'
            placeholder=' Full Name'
            className='p-3 m-2 w-full'
          ></input>
        )}
        <input
          ref={emailRef}
          type='text'
          placeholder='Enter Email'
          className='p-3 m-2 w-full'
          onChange={handleEmailChange}
        ></input>
        <p className='ml-2 text-red-700'>{emailErrorMessage}</p>

        <input
          ref={passwordRef}
          type='password'
          placeholder='Password'
          className='p-3 m-2 w-full'
          onChange={handlePasswordChange}
        ></input>
        <p className='ml-2 text-red-700'>{passwordErrorMessage}</p>

        <button
          onClick={handleClick}
          className='p-3 m-2 w-full bg-red-700  text-white'
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className='p-3 m-2  text-white' onClick={toggleForm}>
          {isSignInForm ? "New User? Sign Up" : "Already a User? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;

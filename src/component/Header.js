/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utills/firebase";
import { useNavigate } from "react-router-dom";

function Header() {
  const user = useSelector((store) => store.user);
  console.log(user);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between '>
      <img
        className='w-64 '
        src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
        alt='logo'
      ></img>
      <div className='flex justify-between'>
        {user && user.displayName ? (
          <p className='font-bold text-white m-9'>
            {" "}
            {"User: " + user.displayName}
          </p>
        ) : (
          <p>Guest</p>
        )}

        {user && (
          <button
            className=' text-white font-bold w-26 h-14 px-4 py-4 m-5 bg-red-800 rounded-full'
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
